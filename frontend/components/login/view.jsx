import React from 'react';

const userFromEvent = e => {
	return {
		email: e.target.querySelector("#email").value,
		password: e.target.querySelector("#password").value
	}
}

const submit = createSession => event => {
	event.preventDefault();
	let user = userFromEvent(event);

	createSession(user);
};

export default ({ createSession }) => (
	<div>
		<h2>Login:</h2>
		<form onSubmit={ submit(createSession) }>
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" />

			<label htmlFor="password">Password:</label>
			<input type="password" id="password"/>

			<button type="submit">Submit</button>
		</form>
	</div>
);