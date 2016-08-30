import React from 'react';
import { Link } from 'react-router';

const welcome = (user) => {
	if (user) {
		return <h1>Welcome { user.firstName }</h1>;
	} else {
		return <h1>Welcome to Save for Good!</h1>;
	}
}

const logoffLink = logoff => (
	<ul>
		<li>
			<span class="link" onClick={ logoff }>Logoff</span>
		</li>
	</ul>
)

const loginLinks = (
	<ul>
		<li><Link to='login'>Login</Link></li>
		<li><Link to='register'>Register</Link></li>
	</ul>
)

export default ({ user, logoff }) => (
	<header>
		{ user ? logoffLink(logoff) : loginLinks }
		{ welcome(user) }
	</header>
);