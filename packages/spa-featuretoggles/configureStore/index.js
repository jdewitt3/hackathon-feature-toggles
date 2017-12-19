import {
	createStore,
	applyMiddleware,
	compose,
} from 'redux';
import reduxthunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

// set up logger
const stateTransformer = (state) => {
	// transform to JS for logging
	if (Iterable.isIterable(state)) {
		return state.toJS();
	}
	return state;
};

const logger = createLogger({
	stateTransformer,
});
console.log(reducer);

// set up middleware
const middlewares = [reduxthunk];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}
const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;
const configureStore = () => {
	const store = createStore(
		reducer,
		composeEnhancers(
			applyMiddleware(...middlewares)
		)
	);

	if (module.hot) {
		// enable webpack HMR for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/'); // eslint-disable-line global-require
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
