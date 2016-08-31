import React from 'react';

const renderLoans = (loans) => loans.map(loan => (
	<li>{ loan.entrepreneur.fullName }</li>
));

export default ({ loans }) => {
	// debugger
	return (
	<section className="card">
		<h1>Entrepreneurs</h1>
		<ul>
			{ renderLoans(loans) }
		</ul>
	</section>
)};