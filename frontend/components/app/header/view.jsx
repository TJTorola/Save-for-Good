import React from 'react';
import { Link, browserHistory } from 'react-router';
import Icon from 'utilities/icons';

const go = path => () => browserHistory.push(path);

const logoffLink = (logoff, user) => (
	<section>
		<Link to="/settings">{ user.name }</Link>
		<button className="orange" onClick={ logoff }>Logoff</button>
	</section>
)

const loginLinks = (
	<section>
		<Link to="/register">Register</Link>
		<button className="orange" onClick={ go('login') }>
			Login
		</button>
	</section>
)

export default ({ user, logoff }) => (
	<header className="bg-white u-full-width">
		<nav className="container u-height-lg flex f-between">
			<section>
				<Link to="/entrepreneurs">Entrepreneurs</Link>
				<Link to="/portfolio">Portfolio</Link>
			</section>

			<Icon i="s4g" onClick={ go('/') }/>

			{ user ? logoffLink(logoff, user) : loginLinks }
		</nav>
	</header>
);