import React from 'react';

import { Icon } from 'modules/index';

const userFromForm = () => {
	return {
		email: document.querySelector("#email").value,
		password: document.querySelector("#password").value
	}
}

const submit = createSession => event => {
	if (event) { event.preventDefault(); }
	let user = userFromForm();

	createSession(user);
};

const GUEST_EMAIL = "Philanthr0p1st@yahoo.com";
const GUEST_PASS = "password";

const setEmail    = i => { 
	document.querySelector("#email").value = GUEST_EMAIL.slice(0, i);
};
const setPassword = i => { 
	document.querySelector("#password").value = GUEST_PASS.slice(0, i);
};

const guestLogin = createSession => () => {
	let i = 1
	document.querySelector("#email").value    = "";
	document.querySelector("#password").value = "";

	let interval = setInterval(() => {
		if (i > GUEST_EMAIL.length + GUEST_PASS.length) {
			clearInterval(interval);
			submit(createSession)();
		} else if (i > GUEST_EMAIL.length) {
			setPassword(i - GUEST_EMAIL.length);
		} else {
			setEmail(i);
		}
		i++;
	}, 10);
}

export default ({ createSession }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Login</h1>
		</section>

		<form className="u-mar-no" id="form" onSubmit={ submit(createSession) }>
			<section className="card">
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" className="u-full-width" />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" className="u-full-width" />
			</section>


			<div className="toolbar">
				<div className="card-button black" onClick={ guestLogin(createSession) }>
					<Icon i='user' /> Login as Guest
				</div>
				<button type="submit" className="card-button green">
					<Icon i='signIn' /> Login
				</button>
			</div>
		</form>
	</div>
);