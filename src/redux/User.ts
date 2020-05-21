import User from '@chimerax/common-web/lib/model/User';
import { Action } from 'redux';
import * as endpoints from '../rest/endpoints';
import restClient from '../rest/restClient';
import { AxiosResponse } from 'axios';
import { getCookies } from '@chimerax/common-web/lib/util/cookies';
import oAuthRestClient from '../rest/oAuthRestClient';
import { Authentication } from '../model/Authentication';

export interface UserState {
	user?: User;
	auth?: Authentication;
}

export interface UserAction extends Action, Partial<UserState> {
	user?: User;
	auth?: Authentication;
}

const SET_USER = 'SET_USER';
export const setUser = (user: User) => ({
	type: SET_USER,
	user,
});

const SET_AUTH = 'SET_AUTH';
export const setAuth = (auth: Authentication) => ({
	type: SET_AUTH,
	auth,
});

export const doLogin = (code: string) => {
	return (dispatch: any) => {
		return restClient
			.post(`${endpoints.loginURL}`, { code })
			.then((response: AxiosResponse<Authentication>) => {
				const { c_token, d_token } = response.data;
				document.cookie = `c_token=${c_token}`;
				document.cookie = `d_token=${d_token}`;
				oAuthRestClient.setHeader('Authorization', `Bearer ${c_token}`);
				restClient.setHeader('Authorization', `Bearer ${d_token}`);
				dispatch(setAuth(response.data));
			});
	};
};

export const fetchUserInfo = () => {
	return (dispatch: any) => {
		return oAuthRestClient
			.get(endpoints.userInfoURL)
			.then((response: AxiosResponse<User>) => {
				dispatch(setUser(response.data));
			});
	};
};

const { c_token, d_token } = getCookies();

const auth = (d_token && c_token) ? { d_token, c_token } : undefined;


const defaultState: UserState = {
	auth,
};

const user = (state: UserState = defaultState, action: UserAction) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.user };
		case SET_AUTH:
			return { ...state, auth: action.auth };
		default:
			return state;
	}
};

export default user;
