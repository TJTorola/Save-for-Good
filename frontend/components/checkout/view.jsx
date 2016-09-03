import React from 'react';

import * as Submit   from './submit/container';
import * as Confirm  from './confirm/container';
import * as Billing  from './billing/container';
import * as Donation from './donation/container';
import Form from './form_wrapper';

export default () => (
	<div className="Checkout container">
		<Form form={ Confirm } />
		<Form form={ Donation } />
		<Form form={ Billing } />
		<Form form={ Submit } />
	</div>
)