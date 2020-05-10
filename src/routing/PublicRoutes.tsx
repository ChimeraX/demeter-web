import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import React from 'react';
import LoginPage from '../pages/LoginPage';

const PublicRoutes = () => {
	return (
		<Switch>
			<Route path="/login" exact component={LoginPage}/>
			<Route path="/" exact component={LandingPage}/>
			<Redirect path="/**" to={'/'}/>
		</Switch>
	);
};
export default PublicRoutes;
