import React from 'react';

const userFromEvent = e => {
	return {
		email: e.target.querySelector("#email").value,
		password: e.target.querySelector("#password").value
	}
}

const submit = createUser => event => {
	event.preventDefault();
	let user = userFromEvent(event);

	createUser(user);
};

export default ({ createUser }) => (
	<div>
		<h2>Register:</h2>
		<form onSubmit={ submit(createUser) }>
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" />

			<label htmlFor="password">Password:</label>
			<input type="password" id="password"/>

			<button type="submit">Submit</button>
		</form>
	</div>
);