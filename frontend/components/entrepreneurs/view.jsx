import React from 'react';
import Waypoint from 'react-waypoint';

import Loan from './loan';
import { Icon } from 'modules/index';

const renderLoans = (loans) => loans.map(loan => (
	<Loan key={ loan.id } loan={ loan } />
));

const requestLoans = (getLoans, loading) => () => {
	if (!loading) { getLoans(); }
}

const loaderStyle = (fullyLoaded) => ( fullyLoaded ? { display: 'none' } : {} );

export default ({ loans, getLoans, loading, fullyLoaded }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Entrepreneurs</h1>
		</section>

		{ renderLoans(loans) }

		<div className="Loans-loader" style={ loaderStyle(fullyLoaded) } >
			<Waypoint onEnter={ requestLoans(getLoans, loading) } />
			<Icon i="gear" className="u-spin" />
		</div>
	</div>
);