import history from './history';
import { Router } from 'react-router-dom';
import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { connect } from 'react-redux';
import DemeterXState from '../redux/DemeterXState';

interface RoutesProperties {
	isAuthenticated: boolean;
}

const Routes: React.FC<RoutesProperties> = (properties) => {
	const { isAuthenticated } = properties;
	return (
		<Router history={history}>
			{isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>}
		</Router>
	);
};

const mapStateToProps = (state: DemeterXState) => {
	return {
		isAuthenticated: state.user.auth !== undefined,
	};
};

export default connect(mapStateToProps)(Routes);
