import React from 'react';
import Waypoint from 'react-waypoint';

import Loan from './loan'

const renderLoans = (loans) => loans.map(loan => (
	<Loan key={ loan.id } loan={ loan } />
));

const requestLoans = (getLoans, loading) => () => {
	if (!loading) { getLoans(); }
}

export default ({ loans, getLoans, loading }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Entrepreneurs</h1>
		</section>

		{ renderLoans(loans) }

		<Waypoint onEnter={ requestLoans(getLoans, loading) } />
	</div>
);