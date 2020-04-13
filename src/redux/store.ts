import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createThemeReducer } from '@chimerax/common-app/lib/redux/reducers/theme';
import themes, { GREEN_ORANGE } from '@chimerax/common-app/lib/theming/themes';
import category from './Category';

const theme = createThemeReducer(themes, GREEN_ORANGE);

const reducer = combineReducers({
    theme,
    category,
});

const loggerMiddleware = createLogger();

const store: Store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
