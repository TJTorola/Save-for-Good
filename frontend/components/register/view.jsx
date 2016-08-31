import React from 'react';

const userFromEvent = e => {
	return {
		email: e.target.querySelector("#email").value,
		password: e.target.querySelector("#password").value,
		first_name: e.target.querySelector("#first-name").value,
		last_name: e.target.querySelector("#last-name").value,
	}
}

const submit = createUser => event => {
	event.preventDefault();
	let user = userFromEvent(event);

	createUser(user);
};

export default ({ createUser }) => (
	<section className="card">
		<h1>Register</h1>
		<form className="u-mar-no" onSubmit={ submit(createUser) }>
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" className="u-full-width" />

			<label htmlFor="first-name">First Name:</label>
			<input type="text" id="first-name" className="u-full-width" />

			<label htmlFor="last-name">Last Name:</label>
			<input type="text" id="last-name" className="u-full-width" />

			<label htmlFor="password">Password:</label>
			<input type="password" id="password" className="u-full-width" />

			<hr />

			<button type="submit" className="u-full-width">Submit Registration</button>
		</form>
	</section>
);