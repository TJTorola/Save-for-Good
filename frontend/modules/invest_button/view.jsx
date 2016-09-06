import React from 'react';
import { Icon } from 'modules/index';

export default ({ loan, contributions, showLightbox }) => (
	<div className="card-button green" onClick={ showLightbox.bind(null, loan) }>
		<Icon i="s4g" /> Invest in { loan.entrepreneur.name }
	</div>
);