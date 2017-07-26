import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), ReduxPromise];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.devToolsExtension;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const configureStore = () => {
	const store = createStore(rootReducer, initialState, composedEnhancers);

	// if (process.env.NODE_ENV !== "production") {
	// 	if (module.hot) {
	// 		module.hot.accept('./reducers', () => {
	// 			store.replaceReducer(rootReducer, initialState, composedEnhancers)
	// 		})
	// 	}
	// }

	return store;
};

export default configureStore();
