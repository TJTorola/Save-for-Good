import React from 'react';

import Submit   from './submit/container';
import Confirm  from './confirm/container';
import Billing  from './billing/container';
import Donation from './donation/container';
import Form     from './form_wrapper';

export default ({ step }) => (
	<div className="Checkout container">
		<Form
			title="Confirm Contributions"
			link="/checkout/confirm"
			show={ step === "CONFIRM" } 
			Form={ Confirm } />
		<Form
			title="Save for Good Donation"
			link="/checkout/donation"
			show={ step === "DONATION" } 
			Form={ Donation } />
		<Form
			title="Billing Information"
			link="/checkout/billing"
			show={ step === "BILLING" } 
			Form={ Billing } />
		<Form
			title="Submit"
			link="/checkout/submit"
			show={ step === "SUBMIT" } 
			Form={ Submit } />
	</div>
);