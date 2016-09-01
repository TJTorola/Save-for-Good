import React from 'react';

import Header from './header/container';
import Errors from './errors/container';

export default ({ children }) => (
	<div>
		<div className="header-shadow" />
		<Header />
		<Errors />
		
		<content className="u-full-width">
			{ children }
		</content>
	</div>
);