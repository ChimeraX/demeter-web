import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import user from './User';
import discover from './Discover';
import favorite from './Favorite';

const reducer = combineReducers({
    discover,
	favorite,
	user
});

const loggerMiddleware = createLogger();

const store: Store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
