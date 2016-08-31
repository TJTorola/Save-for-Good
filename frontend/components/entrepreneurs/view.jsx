import React from 'react';
import Loan from './loan'

const renderLoans = (loans) => loans.map(loan => (
	<Loan loan={ loan } />
));

export default ({ loans }) => (
	<div>
		<section className="card">
			<h1>Entrepreneurs</h1>
		</section>

		{ renderLoans(loans) }
	</div>
);