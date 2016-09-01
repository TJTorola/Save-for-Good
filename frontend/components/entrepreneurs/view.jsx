import React from 'react';
import Loan from './loan'

const renderLoans = (loans) => loans.map(loan => (
	<Loan key={ loan.id } loan={ loan } />
));

export default ({ loans }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Entrepreneurs</h1>
		</section>

		{ renderLoans(loans) }
	</div>
);