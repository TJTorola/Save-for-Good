import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';

const store = {};

const Root = () => (
	<Provider store={ store }>
		<Router />
	</Provider>
);

export default Root;