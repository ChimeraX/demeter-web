import Recipe from '../model/Recipe';
import { Action } from 'redux';
import restClient from '../rest/restClient';
import * as endpoints from '../rest/endpoints';
import { AxiosResponse } from 'axios';
import Category from '../model/Category';
import Page from '@chimerax/common-app/lib/rest/Page';


export interface DiscoverState {
	recipes: {
		items: Recipe[];
		focused?: Recipe;
	};
	categories: {
		items: Category[];
		focused?: Category;
	};
	isFetching?: boolean;
	initialized?: boolean;
}

export interface DiscoverAction extends Action<String> {
	override?: boolean;
	recipes?: Page<Recipe>;
	categories?: Category[];
	focusedRecipe?: Recipe;
	focusedCategory?: Category;
	parentCategory?: Category;
	isFetching?: boolean;
}

const SET_CATEGORIES = 'SET_CATEGORIES';
export const setCategories = (categories: Category[], parentCategory?: Category) => ({
	type: SET_CATEGORIES,
	categories,
	parentCategory,
});

const SET_DISCOVER_RECIPES = 'SET_DISCOVER_RECIPES';
export const setDiscoverRecipes = (recipes?: Page<Recipe>, override: boolean = false) => ({
	type: SET_DISCOVER_RECIPES,
	recipes,
	override,
});

const GET_DISCOVER_RECIPES = 'GET_DISCOVER_RECIPES';
export const getDiscoverRecipes = (override: boolean = false) => ({
	type: GET_DISCOVER_RECIPES,
	override,
});

export const fetchCategories = (parentCategory?: Category) => {
	return (dispatch: any) => {
		const query = parentCategory ? `?parent=${parentCategory.id}` : '';
		return restClient
			.get(`${endpoints.categoryURL}${query}`)
			.then((response: AxiosResponse<Page<Category>>) => {
				const { content: categories } = response.data;
				dispatch(setCategories(categories, parentCategory));
			});
	};
};

export const fetchRecipes = (category?: Category, override?: boolean) => {
	return (dispatch: any) => {
		dispatch(getDiscoverRecipes(override));
		const query = category ? `?category=${category.id}` : '';
		const recipeURL = `${endpoints.recipeURL}${query}`;
		return restClient
			.get(recipeURL)
			.then((response: AxiosResponse<Page<Recipe>>) => {
				dispatch(setDiscoverRecipes(response.data, override));
			});

	};
};

function setLastFetch(fromLastFetch: boolean) {
	return (category: Category) => ({ ...category, fromLastFetch });
}

const initialState: DiscoverState = {
	recipes: {
		items: [],
	},
	categories: {
		items: [],
	},
	isFetching: false,
	initialized: false,
};

const discover = (state: DiscoverState = initialState, action: DiscoverAction) => {
	switch (action.type) {
		case GET_DISCOVER_RECIPES:
			return {
				...state,
				recipes: {
					...state.recipes,
					isFetching: true,
				},
			};
		case SET_DISCOVER_RECIPES:
			const stateRecipes = state.recipes.items;
			const actionRecipes = action.recipes!!;
			const override = action.override!!;
			const items: Recipe[] = [];

			if (!override) {
				items.push(...stateRecipes);
			}

			items.push(...actionRecipes.content);

			return {
				...state,
				recipes: {
					...state.recipes,
					items,
				},
				initialized: true,
			};
		case SET_CATEGORIES:
			const { parentCategory } = action;
			if (parentCategory !== undefined) {
				const index = state.categories.items.indexOf(parentCategory);
				const newCategories = action.categories!!.map(setLastFetch(true));
				const oldCategories = state.categories.items.map(setLastFetch(false));
				return {
					...state,
					categories: {
						...state.categories,
						items: [
							...oldCategories.slice(0, index),
							{
								...oldCategories[index],
								childrenFetched: true,
							},
							...newCategories,
							...oldCategories.slice(index + 1),
						],
					},
				};
			} else {
				return {
					...state,
					categories: {
						...state.categories,
						items: action.categories,
					},
					initialized: true,
				};
			}

		default:
			return state;
	}
};

export default discover;
