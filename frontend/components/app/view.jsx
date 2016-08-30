import React from 'react';

import Header from './header/container';
import Errors from './errors/container';

export default ({ children }) => (
	<div>
		<Header />
		<Errors />
		
		{ children }
	</div>
);