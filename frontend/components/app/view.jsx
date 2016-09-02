import React from 'react';

import Header   from './header/container';
import Errors   from './errors/container';
import Lightbox from './lightbox/container';

export default ({ children }) => (
	<div>
		<div className="Header-shadow" />
		<Lightbox />
		<Header />
		<Errors />
		
		<content className="Content u-full-width">
			{ children }
		</content>
	</div>
);