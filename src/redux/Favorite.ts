import Recipe from '../model/Recipe';
import { Action } from 'redux';
import restClient from '../rest/restClient';
import * as endpoints from '../rest/endpoints';
import { AxiosResponse } from 'axios';
import Page from '@chimerax/common-app/lib/rest/Page';

export interface FavoriteState {
	recipes: {
		items: Recipe[];
		focused?: Recipe;
	};
	isFetching?: boolean;
	initialized?: boolean;
}

export interface FavoriteAction extends Action<String> {
	recipes?: Recipe[];
	focusedRecipe?: Recipe;
	isFetching?: boolean;
}

const SET_FAVORITE_RECIPES = 'SET_FAVORITE_RECIPES';
export const setFavoriteRecipes = (recipes: Recipe[]) => ({
	type: SET_FAVORITE_RECIPES,
	recipes,
});

export const fetchFavoriteRecipes = () => {
	return (dispatch: any, getState: any) => {
		return restClient
			.get(`${endpoints.recipeURL}`)
			.then((response: AxiosResponse<Page<Recipe>>) => {
				dispatch(setFavoriteRecipes(response.data.content));
			});

	};
};

const initialState: FavoriteState = {
	recipes: {
		items: [],
	},
	initialized: false,
};

const favorite = (state: FavoriteState = initialState, action: FavoriteAction) => {
	switch (action.type) {
		case SET_FAVORITE_RECIPES:
			return {
				...state,
				recipes: {
					...state.recipes,
					items: [
						...state.recipes.items,
						...action.recipes!!
					]
				},
				initialized: true,
			};
		default:
			return state;
	}
};

export default favorite;
