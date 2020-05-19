import * as endpoints from './endpoints';

const oAuthConfig = {
	oauthURL: `${endpoints.oauthURL}`,
	clientId: 'e263ad20',
	redirect: `${document.location.href}/login`,
	scopes: [
		'profile'
	]
};
export default oAuthConfig;
