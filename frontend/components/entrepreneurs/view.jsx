import React from 'react';
import Loan from './loan'

const renderLoans = (loans, showLightbox) => loans.map(loan => (
	<Loan key={ loan.id } loan={ loan } showLightbox={ showLightbox } />
));

export default ({ loans, showLightbox }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Entrepreneurs</h1>
		</section>

		{ renderLoans(loans, showLightbox) }
	</div>
);