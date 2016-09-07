import React from 'react';

import { Icon } from 'modules/index';

export default () => (
	<div>
		<div className="Home-splash">
			<Icon i="s4g" />
			<h2>Save for Good</h2>
		</div>

		<div className="card card-header Home-header">
			<h1>How it works...</h1>
		</div>

		<div className="container">
			<div className="Home-steps">
				<div className="Home-step card Home-find">
					<h4>1. Find an entrepreneur who does not have access to traditional loan services.</h4>
					<Icon i="search" className="HomeFind-search" />
				</div>

				<div className="Home-step card Home-invest">
					<h4>2. Make a contribution of at least $25 to their loan.</h4>
					<Icon i="user" className="HomeInvest-userOne" />
					<Icon i="right" className="HomeInvest-arrow" />
					<Icon i="user" className="HomeInvest-userTwo" />
				</div>

				<div className="Home-step card Home-loan">
					<h4>3. The Loan is disbursed, the entrerpreneur does their work and repays it in time.</h4>
					<Icon i="hourGlass" className="HomeLoan-hourGlass" />
				</div>

				<div className="Home-step card Home-return">
					<h4>4. Your Contribution is returned to you and you can withdraw it from Save for Good or use it on another loan.</h4>
					<Icon i="user" className="HomeReturn-userOne" />
					<Icon i="left" className="HomeReturn-arrow" />
					<Icon i="user" className="HomeReturn-userTwo" />
				</div>
			</div>

			<div className="card-button green Home-signin">
				<Icon i="signIn" />
				Sign in as a Guest
			</div>
		</div>
	</div>
);