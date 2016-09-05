import React from 'react';
import { parseJSON } from 'jquery';

import Contribution from './contribution';

const map = contributions => contributions.map(contribution => (
	<Contribution contribution={ contribution } key={ contribution.loan.id } />
));

export default ({ contributions }) => (
	<div className="card Confirm">
		{ map(contributions) }

		<div className="Confirm-total">
			<strong className="ConfirmTotal-label">Total Contribution:</strong>
			<span className="ConfirmTotal-amount">$ 50.00</span>
		</div>
	</div>
);