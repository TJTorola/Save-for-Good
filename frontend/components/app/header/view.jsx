import React from 'react';
import { Link } from 'react-router';

import { go, toArray } from 'utilities/helper'
import { Icon } from 'modules/index';

const logoffLink = ({ user, logoff, contributions }) => {
	let count = toArray(contributions).length
	if (count > 0) {
		return (
			<section>
				<Link to="/checkout" className="Header-link">
					<span className="badge">{ count }</span> Checkout
				</Link>
				<button className="orange" onClick={ logoff }>Logoff, { user.name }</button>
			</section>
		)
	} else {
		return (
			<section>
				<button className="orange Header-button" onClick={ logoff }>Logoff, { user.name }</button>
			</section>
		)
	}
}

const portfolio = ({ user }) => {
	if (user) {
		return (
			<Link className="Header-link" to="/portfolio">
				Portfolio
			</Link>
		);
	}
}

const loginLinks = (
	<section>
		<Link to="/register" className="Header-link">Register</Link>
		<button className="orange" onClick={ go('/login') }>
			Login
		</button>
	</section>
)

export default (props) => (
	<header className="Header bg-white u-full-width">
		<nav className="Header-nav container u-height-lg flex f-between">
			<div className="flex f-between u-full-width u-full-height">
				<section>
					<Link className="Header-link" to="/entrepreneurs">
						Entrepreneurs
					</Link>
					{ portfolio(props) }
				</section>

				<div onClick={ go('/') } className="Header-icon">
					<Icon i="s4g"/>
				</div>

				{ props.user ? logoffLink(props) : loginLinks }
			</div>
		</nav>
	</header>
);