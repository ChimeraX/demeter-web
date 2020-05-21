import { connect } from 'react-redux';
import ChimeraX from '@chimerax/common-web/lib/widgets/ChimeraX';
import * as endpoints from '../rest/endpoints';

const mapStateToProps = () => {
	return {
		oauthURL: `${endpoints.authorizationURL}`,
		clientId: '2dfb0e68-7847-40b4-91d4-6cc0040b7ce7',
		redirect: `${document.location.href}login`,
		scopes: [
			'profile'
		]
	};
};

export default connect(mapStateToProps)(ChimeraX);
