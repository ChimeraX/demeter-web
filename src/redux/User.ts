import User from '@chimerax/common-web/lib/model/User';
import { Action } from 'redux';
import * as endpoints from '../rest/endpoints';
import restClient from '../rest/restClient';
import { AxiosResponse } from 'axios';
import { getCookies } from '@chimerax/common-web/lib/util/cookies';
import { Authentication } from '../model/Authentication';

export interface UserState {
	user?: User;
	auth?: string;
	code?: string;
}

export interface UserAction extends Action, Partial<UserState> {
	user?: User;
	auth?: string;
	code?: string;
}

const SET_USER = 'SET_USER';
export const setUser = (user: User) => ({
	type: SET_USER,
	user,
});

const SET_AUTH = 'SET_AUTH';
export const setAuth = (auth: string) => ({
	type: SET_AUTH,
	auth,
});

const SET_CODE = 'SET_CODE';
export const setCode = (code: string) => ({
	type: SET_CODE,
	code,
});

export const doLogin = () => {
	return (dispatch: any, getState: any) => {
		const code = getState().user.code;
		console.log(code);
		console.log(restClient.getHeader('authorization'));
		return restClient
			.post(endpoints.loginURL, { code })
			.then((response: AxiosResponse<Authentication>) => {
				const { token } = response.data;
				document.cookie = `d_token=${token}`;
				restClient.setHeader('Authorization', `Bearer ${token}`);
				dispatch(setAuth(token));
			});
	};
};

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
	auth: getCookies().d_token,
	code: getCookies().code,
};

const user = (state: UserState = defaultState, action: UserAction) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.user };
		case SET_CODE:
			return { ...state, code: action.code };
		case SET_AUTH:
			return { ...state, auth: action.auth };
		default:
			return state;
	}
};

export default user;
