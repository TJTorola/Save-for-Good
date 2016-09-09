import React from 'react';

import { Icon, Input } from 'modules/index';

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

	document.querySelector("#email").focus();
	let interval = setInterval(() => {
		if (i === GUEST_EMAIL.length) {
			document.querySelector("#password").focus();
		}

		if (i > GUEST_EMAIL.length + GUEST_PASS.length) {
			clearInterval(interval);
			setTimeout(() => { submit(createSession)(); }, 150)
		} else if (i > GUEST_EMAIL.length) {
			setPassword(i - GUEST_EMAIL.length);
		} else {
			setEmail(i);
		}
		i++;
	}, 30);
}

export default ({ createSession }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Login</h1>
		</section>

		<form className="u-mar-no" id="form" onSubmit={ submit(createSession) }>
			<section className="card">
				<Input id="email" placeholder="Email" type="text" 
					errorMsg="Must be a valid email address."
					pattern={/^.+@.+\..+$/} />
				<Input id="password" placeholder="Password" type="password"
					errorMsg="Password must be 8 characters long."
					pattern={/.{8,}/} />
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