import React from 'react';

import { toCurrency, toArray } from 'utilities/helper';
import Contribution from './contribution';

const map = contributions => toArray(contributions).map(contribution => (
	<Contribution contribution={ contribution } key={ contribution.loan.id } />
));

const total = contributions => toArray(contributions).reduce((accum, contribution) => (
	accum + contribution.amount
), 0);

export default ({ contributions }) => (
	<div className="card Confirm">
		{ map(contributions) }

		<div className="Confirm-total">
			<strong className="ConfirmTotal-label">Total Contribution:</strong>
			<span className="ConfirmTotal-amount">{ toCurrency(total(contributions)) }</span>
		</div>
	</div>
);