import React from 'react';
import { Icon } from 'utilities/helper';

export default ({ loan, contributions, showLightbox }) => (
	<div className="card-button green" onClick={ showLightbox.bind(null, loan) }>
		<Icon i="s4g" /> Invest in { loan.entrepreneur.name }
	</div>
);