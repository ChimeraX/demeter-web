import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProperties extends RouteProps {
	authenticated: boolean;
	redirect: string;
}

const PrivateRoute: React.FC<PrivateRouteProperties> = (properties) => {
	// properties
	const { authenticated, redirect } = properties;

	if (authenticated) {
		return <Route {...(properties as RouteProps)} />;
	} else {
		return <Redirect to={redirect}/>;
	}
};

export default PrivateRoute;
