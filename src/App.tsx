import React from 'react';
import store from './redux/store';
import { connect, Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { Router, Switch, Route } from 'react-router-dom';
import history from './routing/history';
import DemeterXState from './redux/DemeterXState';
import Main from './widgets/Main';
import PrivateRoute from './components/PrivateRoute';
import DiscoverPage from './pages/DiscoverPage';
import FavoritePage from './pages/FavoritePage';
import SavedPage from './pages/SavedPage';
import CalculatePage from './pages/CalculatePage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import DefaultPage from './pages/DefaultPage';
import ChimeraXTheme from '@chimerax/common-app/lib/theming/ChimeraXTheme';
import { fetchCategories } from './redux/Category';

const PrivateRoutes = () => {
    return (
        <React.Fragment>
            <Main>
                <PrivateRoute
                    path={'/'}
                    children={
                        <React.Fragment>
                            <PrivateRoute path={'/discover'} component={DiscoverPage} />
                            <PrivateRoute path={'/favorites'} component={FavoritePage} />
                            <PrivateRoute path={'/saved'} component={SavedPage} />
                            <PrivateRoute path={'/calculator'} component={CalculatePage} />
                            <PrivateRoute path={'/settings'} component={SettingsPage} />
                            <PrivateRoute path={'/'} exact component={DefaultPage} />
                        </React.Fragment>
                    }
                />
            </Main>
        </React.Fragment>
    );
};

const AppWidget = (properties: { theme: ChimeraXTheme }) => {
    const { theme } = properties;
    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/" component={PrivateRoutes} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

const mapStateToProps = (state: DemeterXState) => {
    return {
        theme: state.theme.theme,
    };
};

const initStore = (_store: any) => {
	_store.dispatch(fetchCategories());
};

initStore(store);

const AppComponent = connect(mapStateToProps)(AppWidget);

const AppContainer = () => {
	return (
        <StoreProvider store={store}>
            <AppComponent />
        </StoreProvider>
    );
};

export default AppContainer;

