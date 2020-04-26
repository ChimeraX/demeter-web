import User from '@chimerax/common-web/lib/model/User';
import { Action } from 'redux';
import * as endpoints from '../rest/endpoints';
import restClient from '../rest/restClient';
import { AxiosResponse } from 'axios';
import userData from '../components/userData';

export interface UserState {
	user?: User;
	isAuthenticated: boolean;
}

export interface UserAction extends Action, Partial<UserState> {

}

const SET_USER = 'SET_USER';
export const setUser = (user: User) => ({
	type: SET_USER,
	user,
});

export const fetchUserInfo = () => {
	return (dispatch: any) => {
		return restClient
			.get(endpoints.userInfoURL)
			.then((response: AxiosResponse<User>) => {
				dispatch(setUser(response.data));
			});
	};
};

const defaultState: UserState = {
	user: userData,
	isAuthenticated: false
};

const user = (state: UserState = defaultState, action: UserAction) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default user;
