const devConfig = {
	apiURL: 'http://localhost:3754',
};

const config = devConfig;

export const apiURL = `${config.apiURL}`;

export const recipeURL = `${apiURL}/recipe`;
export const categoryURL = `${apiURL}/category`;
export const loginURL = `${apiURL}/authenticate`;
export const oauthURL = `http://localhost:4752/oauth`;
export const userInfoURL = `${oauthURL}/userinfo`;
export const authorizationURL = `http://localhost:3000/oauth/authorize`;
