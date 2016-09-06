import React from 'react';

import { Icon, ContributionLightbox } from 'modules/index';
import { toCurrency } from 'utilities/helper';

const body = (loan, contributions) => {
	if (contributions[loan.id] === undefined) {
		return `Invest in ${ loan.entrepreneur.name }`;
	} else {
		return `Change Investment - ${ toCurrency(contributions[loan.id].amount, 0) }`;
	}
}

export default ({ loan, contributions, showLightbox }) => (
	<div className="card-button green" onClick={ showLightbox.bind(null, loan) }>
		<Icon i="s4g" /> { body(loan, contributions) }
	</div>
);