import React from 'react';

import { Icon } from 'utilities/helper'

export default ({ show }) => (
	<div className="Checkout-header card">
		<Icon i={ show ? 'up' : 'down' } className="Checkout-icon" /> Submit
	</div>
)