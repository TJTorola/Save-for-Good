import React from 'react';

import { Icon } from 'modules/index';
import { go } from 'utilities/helper';

const submit = addPayment => () => {
	addPayment("WHEEEE!");
	go('/portfolio')();
}

export default ({ addPayment }) => (
	<div>
		<div className="card Billing">
			<h1>You are Approved!</h1>
		</div>

		<div className="toolbar">
			<div className="card-button black" onClick={ go('/checkout/donation') }>
				<Icon i='left' /> Previous Step
			</div>
			<div className="card-button green" onClick={ submit(addPayment) }>
				<Icon i='s4g' /> Submit Contributions
			</div>
		</div>
	</div>
);