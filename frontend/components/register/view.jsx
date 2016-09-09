import React from 'react';

import { Icon, Input } from 'modules/index';

const userFromEvent = e => {
	return {
		email: e.target.querySelector("#email").value,
		password: e.target.querySelector("#password").value,
		name: e.target.querySelector("#name").value,
	}
}

const submit = createUser => event => {
	event.preventDefault();
	let user = userFromEvent(event);

	createUser(user);
};

export default ({ createUser }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Register</h1>
		</section>

		<form className="u-mar-no" onSubmit={ submit(createUser) }>
			<section className="card">
				<Input id="email" placeholder="Email" type="email" />

				<Input id="password" placeholder="Password" type="password" />

				<Input id="name" placeholder="Name" type="text" />
			</section>

			<div className="toolbar">
				<button type="submit" className="card-button green">
					<Icon i='signIn' /> Submit Registration
				</button>
			</div>
		</form>
	</div>
);