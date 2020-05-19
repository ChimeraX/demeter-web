import * as endpoints from './endpoints';

const oAuthConfig = {
	oauthURL: `${endpoints.authorizationURL}`,
	clientId: '2dfb0e68-7847-40b4-91d4-6cc0040b7ce7',
	redirect: `${document.location.href}login`,
	scopes: [
		'profile'
	]
};
export default oAuthConfig;
