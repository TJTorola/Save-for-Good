import { createStore } from 'redux';

import reducers from './reducersCombiner';
import middleware from './middlewareCombiner';

let configureStore = (preloadedState = {}) => {
	return createStore(
		reducers,
		preloadedState,
		middleware
	);
}

export default configureStore;