import React from 'react';
import store from './redux/store';
import { connect, Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './routing/history';
import DemeterXState from './redux/DemeterXState';
import Main from './widgets/Main';
import DiscoverPage from './pages/DiscoverPage';
import FavoritePage from './pages/FavoritePage';
import SavedPage from './pages/SavedPage';
import CalculatePage from './pages/CalculatePage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import greenTheme from './theming/greenTheme';
import LandingPage from './pages/LandingPage';
import DemeterXTheme from './theming/DemeterXTheme';

interface AppProperties {
	theme: DemeterXTheme;
	isAuthenticated: boolean;
}

const PublicRoutes = () => {
	return (
		<Switch>
			<Route path="/" exact component={LandingPage}/>
			<Redirect path="/**" to={'/'}/>
		</Switch>
	);
};


const PrivateRoutes = () => {
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

const App: React.FC<AppProperties> = (properties) => {
	const { theme, isAuthenticated } = properties;
	return (
		<ThemeProvider theme={theme}>
			<Router history={history}>
				{isAuthenticated ? <PrivateRoutes/> : <PublicRoutes/>}
			</Router>
		</ThemeProvider>
	);
};

const mapStateToProps = (state: DemeterXState) => {
	return {
		theme: greenTheme,
		isAuthenticated: state.user.isAuthenticated,
	};
};

const AppComponent = connect(mapStateToProps)(App);

const AppContainer = () => {
	return (
		<StoreProvider store={store}>
			<AppComponent/>
		</StoreProvider>
	);
};

export default AppContainer;

