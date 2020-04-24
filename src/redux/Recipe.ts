import Recipe from '../model/Recipe';
import { Action } from 'redux';
import restClient from '../rest/restClient';
import * as endpoints from '../rest/endpoints';
import { AxiosResponse } from 'axios';
import Page from '@chimerax/common-app/lib/rest/Page';

export interface RecipeState {
	recipes: Recipe[];
	categoryId?: number;
}

export interface RecipeAction extends Action, Partial<RecipeState> {
	override?: boolean;
}

const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = (categoryId?: number) => ({
	type: SET_CATEGORY,
	categoryId,
});

const GET_RECIPES = 'GET_RECIPES';
export const getRecipes = () => ({
	type: GET_RECIPES,
});

const SET_RECIPES = 'SET_RECIPES';
export const setRecipes = (recipes: Recipe[], override: boolean = false) => ({
	type: SET_RECIPES,
	recipes,
	override,
});

export const fetchRecipes = (override: boolean = false) => {
	return (dispatch: any, getState: any) => {
		dispatch(getRecipes());
		const categoryId = getState().recipe.categoryId;
		console.log(`categoryId: ${categoryId}`);
		const query = categoryId ? `&category=${categoryId}` : '';
		return restClient
			.get(`${endpoints.recipe}?size=100${query}`)
			.then((response: AxiosResponse<Page<Recipe>>) => {
				dispatch(setRecipes(response.data.content, override));
			});

	};
};

const initialState: RecipeState = { recipes: [] };

const recipe = (state: RecipeState = initialState, action: RecipeAction) => {
	switch (action.type) {
		case SET_CATEGORY:
			return {
				...state,
				categoryId: action.categoryId,
			};
		case GET_RECIPES:
			return state;
		case SET_RECIPES:
			const stateRecipes = state.recipes;
			const actionRecipes = action.recipes!!;
			const override = action.override!!;
			const recipes: Recipe[] = [];
			if (!override) {
				recipes.push(...stateRecipes);
			}
			recipes.push(...actionRecipes);
			return {
				recipes,
			};
		default:
			return state;
	}
};

export default recipe;
