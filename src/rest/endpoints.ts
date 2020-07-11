const devConfig = {
	apiURL: 'http://localhost:3754',
	oauthURL: 'http://localhost:8796/prometheus/oauth',
	authorizationURL: 'https://localhost:3000/oauth',
};

const config = devConfig;

export const apiURL = `${config.apiURL}`;

export const recipeURL = `${apiURL}/recipe`;
export const categoryURL = `${apiURL}/category`;

export const loginURL = `${apiURL}/authenticate`;

export const oauthURL = `${config.oauthURL}`;
export const userInfoURL = `${oauthURL}/userinfo`;

export const authorizationURL = `${config.authorizationURL}`;
