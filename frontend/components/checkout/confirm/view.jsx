import React from 'react';

import { toCurrency, toArray, go } from 'utilities/helper';
import { Icon } from 'modules/index';
import Contribution from './contribution';

const map = contributions => toArray(contributions).map(contribution => (
	<Contribution contribution={ contribution } key={ contribution.loan.id } />
));

const total = contributions => toArray(contributions).reduce((accum, contribution) => (
	accum + contribution.amount
), 0);

export default ({ contributions }) => (
	<div>
		<div className="card Confirm">
			{ map(contributions) }

			<div className="Confirm-total">
				<strong className="ConfirmTotal-label">Total Contribution:</strong>
				<span className="ConfirmTotal-amount">{ toCurrency(total(contributions)) }</span>
			</div>
		</div>

		<div className="toolbar">
			<div className="card-button black" onClick={ go('/entrepreneurs') }>
				<Icon i='left' /> Continue Browsing
			</div>
			<div className="card-button green" onClick={ go('/checkout/donation') }>
				<Icon i='right' /> Next Step
			</div>
		</div>
	</div>
);