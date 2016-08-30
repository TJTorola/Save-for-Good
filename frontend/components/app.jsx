import React from 'react';
import { Link } from 'react-router';

export default ({ children }) => (
	<div>
		<h1>Im an App!</h1>
		<ul>
			<li><Link to='login'>Login</Link></li>
			<li><Link to='register'>Register</Link></li>
		</ul>
		{ children }
	</div>
);