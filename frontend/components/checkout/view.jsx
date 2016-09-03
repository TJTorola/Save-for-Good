import React from 'react';

import * as Submit   from './submit/container';
import * as Confirm  from './confirm/container';
import * as Billing  from './billing/container';
import * as Donation from './donation/container';
import Form from './form_wrapper';

export default ({ step }) => (
	<div className="Checkout container">
		<Form show={ step === "CONFIRM" } form={ Confirm } />
		<Form show={ step === "DONATION" } form={ Donation } />
		<Form show={ step === "BILLING" } form={ Billing } />
		<Form show={ step === "SUBMIT" } form={ Submit } />
	</div>
);