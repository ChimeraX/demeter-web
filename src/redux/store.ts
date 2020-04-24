import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import category from './Category';
import recipe from './Recipe';

const reducer = combineReducers({
    category,
	recipe
});

const loggerMiddleware = createLogger();

const store: Store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
