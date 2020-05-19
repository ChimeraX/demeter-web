const devConfig = {
	apiURL: 'http://34.78.81.159:8080',
	oauthURL: 'http://104.199.0.210:8080/oauth',
	authorizationURL: 'http://35.190.212.7:5000/oauth',
};
/**
const prodConfig = {
	apiURL: `${process.env['API_URL']}`,
	oauthURL: `${process.env['API_URL']}`,
	authorizationURL: `${process.env['API_URL']}`,
};
 */

const config = devConfig;

export const apiURL = `${config.apiURL}`;

export const recipeURL = `${apiURL}/recipe`;
export const categoryURL = `${apiURL}/category`;

export const loginURL = `${apiURL}/authenticate`;

export const oauthURL = `${config.oauthURL}`;
export const userInfoURL = `${oauthURL}/userinfo`;

export const authorizationURL = `${config.authorizationURL}`;
