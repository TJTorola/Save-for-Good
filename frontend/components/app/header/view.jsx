import React from 'react';
import { Link } from 'react-router';

import { go, Icon } from 'utilities/helper'

const logoffLink = (logoff, user) => (
	<section>
		<Link to="/settings" className="Header-link">{ user.name }</Link>
		<button className="orange" onClick={ logoff }>Logoff</button>
	</section>
)

const loginLinks = (
	<section>
		<Link to="/register" className="Header-link">Register</Link>
		<button className="orange" onClick={ go('/login') }>
			Login
		</button>
	</section>
)

export default ({ user, logoff }) => (
	<header className="Header bg-white u-full-width">
		<nav className="Header-nav container u-height-lg flex f-between">
			<div className="flex f-between u-full-width u-full-height">
				<section>
					<Link className="Header-link" to="/entrepreneurs">
						Entrepreneurs
					</Link>
					<Link className="Header-link" to="/portfolio">
						Portfolio
					</Link>
				</section>

				<div onClick={ go('/') } className="Header-icon">
					<Icon i="s4g"/>
				</div>

				{ user ? logoffLink(logoff, user) : loginLinks }
			</div>
		</nav>
	</header>
);