import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';
import configureStore from 'store/configure';

const store = configureStore();

const Root = () => (
	<Provider store={ store }>
		<Router store={ store }/>
	</Provider>
);

export default Root;