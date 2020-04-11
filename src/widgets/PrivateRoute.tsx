import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProperties extends RouteProps {
    authenticated: boolean;
    redirect: string;
}

const PrivateRoute: React.FC<PrivateRouteProperties> = (props) => {
    const { authenticated, redirect } = props;
    if (authenticated) {
        return <Route {...(props as RouteProps)} />;
    } else {
        return <Redirect to={redirect} />;
    }
};

export default PrivateRoute;
