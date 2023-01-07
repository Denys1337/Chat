import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// reducers
import userReducer from './login-service/reducers';


const rootReducer = combineReducers({
	user: userReducer,
});

const composeEnhancers = composeWithDevTools || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
