import React from 'react';
import { parseJSON } from 'jquery';

import Contribution from './contribution';

const map = contributions => contributions.map(contribution => (
	<Contribution contribution={ contribution } key={ contribution.loan.id } />
));

export default ({ contributions }) => (
	<div>
		{ map(contributions) }
	</div>
);