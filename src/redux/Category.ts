import Category from '../model/Category';
import { Action } from 'redux';
import * as endpoints from '../rest/endpoints';
import { AxiosResponse } from 'axios';
import Page from '@chimerax/common-app/lib/rest/Page';
import restClient from '../rest/restClient';

export interface CategoryState {
	categories: Category[];
	selectedCategory?: Category;
}

export interface CategoryAction extends Action, Partial<CategoryState> {
	parentId?: number;
}

const GET_CATEGORIES = 'GET_CATEGORIES';
export const getCategories = (parentId?: number) => ({
	type: GET_CATEGORIES,
	parentId,
});

const SET_CATEGORIES = 'SET_CATEGORIES';
export const setCategories = (categories: Category[], parentId?: number) => ({
	type: SET_CATEGORIES,
	categories,
	parentId,
});

export const fetchCategories = (parentId?: number) => {
	return (dispatch: any) => {
		dispatch(getCategories(parentId));
		const query = parentId ? `?parent=${parentId}` : '';
		return restClient
			.get(`${endpoints.category}${query}`)
			.then((response: AxiosResponse<Page<Category>>) => {
				dispatch(setCategories(response.data.content, parentId));
			});
	};
};

const initialState: CategoryState = { categories: [] };

const category = (state: CategoryState = initialState, action: CategoryAction) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return state;
		case SET_CATEGORIES:
			if (action.parentId !== undefined) {
				const index = state.categories.findIndex((category) => category.id === action.parentId);
				const stateCategories = state.categories.map(category => ({ ...category, lastFetched: false }));
				const actionCategories = action.categories!!.map(category => ({ ...category, lastFetched: true }));
				const categories = [
					...stateCategories.slice(0, index),
					{
						...stateCategories[index],
						fetched: true,
					},
					...actionCategories,
					...stateCategories.slice(index + 1),
				];
				return {
					...state,
					categories,
				};
			} else {
				return {
					...state,
					categories: action.categories,
				};
			}
		default:
			return state;
	}
};

export default category;
