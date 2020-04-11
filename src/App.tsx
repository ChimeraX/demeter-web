import React from 'react';
import store from './redux/store';
import { connect, Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { Router, Switch, Route } from 'react-router-dom';
import history from './routing/history';
import DemeterState from './redux/state';
import ChimeraXTheme from '@chimerax/common-app/lib/theming/ChimeraXTheme';
import ThemePicker from '@chimerax/common-app/lib/components/ThemePicker';
import Main from './widgets/Main';
import PrivateRoute from './components/PrivateRoute';
import RecipeCard from './components/RecipeCard';

const PrivateRoutes = () => {
    return (
        <React.Fragment>
            <Main>
                <PrivateRoute
                    path={'/'}
                    children={
                        <React.Fragment>
                            <PrivateRoute path={'/discover'} component={RecipeCard} />
                            <PrivateRoute path={'/favorites'} component={ThemePicker} />
                            <PrivateRoute path={'/saved'} component={ThemePicker} />
                            <PrivateRoute path={'/calculator'} component={ThemePicker} />
                            <PrivateRoute path={'/settings'} component={ThemePicker} />
                            <PrivateRoute path={'/themes'} component={ThemePicker} />
                        </React.Fragment>
                    }
                />
            </Main>
        </React.Fragment>
    );
};

const App = (properties: { theme: ChimeraXTheme }) => {
    const { theme } = properties;
    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={ThemePicker} />
                    <Route path="/" component={PrivateRoutes} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

const mapStateToProps = (state: DemeterState) => {
    return {
        theme: state.theme.theme,
    };
};

const ThemedApp = connect(mapStateToProps)(App);

const AppContainer = () => {
    return (
        <StoreProvider store={store}>
            <ThemedApp />
        </StoreProvider>
    );
};

export default AppContainer;
