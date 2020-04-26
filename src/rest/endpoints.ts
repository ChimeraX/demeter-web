const devConfig = {
	apiURL: 'http://localhost:3373',
	oauthURL: 'http://localhost:4973/oauth'
};

const config = devConfig;

export const apiURL = `${config.apiURL}`;

export const recipeURL = `${apiURL}/recipe`;
export const categoryURL = `${apiURL}/category`;

export const oauthURL = `${config.oauthURL}`;
export const userInfoURL = `${oauthURL}/userinfo`;
export const authorizationURL = `${oauthURL}/authorization`;
