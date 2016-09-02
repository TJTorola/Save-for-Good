import React from 'react';

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

		<section className="card">
			<form className="u-mar-no" onSubmit={ submit(createUser) }>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" className="u-full-width" />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" className="u-full-width" />

				<label htmlFor="name">Name:</label>
				<input type="text" id="name" className="u-full-width" />

				<hr />

				<button type="submit" className="u-full-width">Submit Registration</button>
			</form>
		</section>
	</div>
);