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
	<div className="container">
		<section className="card card-header">
			<h1>Login</h1>
		</section>

		<section className="card">
			<form className="u-mar-no" onSubmit={ submit(createSession) }>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" className="u-full-width" />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" className="u-full-width" />

				<hr />

				<button type="submit" className="u-full-width">Login</button>
			</form>
		</section>
	</div>
);