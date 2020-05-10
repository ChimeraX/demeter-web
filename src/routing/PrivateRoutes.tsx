import Main from '../widgets/Main';
import { Redirect, Route, Switch } from 'react-router-dom';
import DiscoverPage from '../pages/Discover/DiscoverPage';
import FavoritePage from '../pages/FavoritePage';
import SavedPage from '../pages/SavedPage';
import CalculatePage from '../pages/CalculatePage';
import SettingsPage from '../pages/SettingsPage';
import HomePage from '../pages/HomePage';
import React from 'react';
import DemeterXState from '../redux/DemeterXState';
import { fetchUserInfo } from '../redux/User';
import { connect } from 'react-redux';

interface PrivateRoutesProperties {
	fetchUser: () => void;
}

const PrivateRoutes: React.FC<PrivateRoutesProperties> = (properties) => {
	const { fetchUser } = properties;
	fetchUser();
	return (
		<Main>
			<Switch>
				<Route path={'/discover'} component={DiscoverPage}/>
				<Route path={'/favorites'} component={FavoritePage}/>
				<Route path={'/saved'} component={SavedPage}/>
				<Route path={'/calculator'} component={CalculatePage}/>
				<Route path={'/settings'} component={SettingsPage}/>
				<Route path={'/'} component={HomePage}/>
				<Redirect to="/"/>
			</Switch>
		</Main>
	);
};

const mapStateToProps = (state: DemeterXState) => ({});

const mapDispatchToProps = (dispatch: any) => ({
	fetchUser: () => dispatch(fetchUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);

