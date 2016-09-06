import React from 'react';

import Confirm  from './confirm/container';
import Billing  from './billing/container';
import Donation from './donation/container';
import Form     from './form_wrapper';

export default ({ step }) => (
	<div className="Checkout container">
		<Form
			title="Confirm Contributions"

			prev="/entrepreneurs"
			prevText="Continue Browsing"
			link="/checkout/confirm"
			next="/checkout/donation"

			show={ step === "CONFIRM" } 
			Form={ Confirm } />
		<Form
			title="Save for Good Donation"

			prev="/checkout/confirm"
			link="/checkout/donation"
			next="/checkout/billing"

			show={ step === "DONATION" } 
			Form={ Donation } />
		<Form
			title="Billing Information"

			prev="/checkout/donation"
			link="/checkout/billing"
			next="/portfolio"
			nextText="Submit Contributions"
			nextIcon="s4g"

			show={ step === "BILLING" } 
			Form={ Billing } />
	</div>
);