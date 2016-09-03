import React from 'react';

import { Icon } from 'utilities/helper'

export default ({ form }) => {
	const Component = form.component;

	return (
	<div>
		<div className="Checkout-header card">
			<Icon i='up'className="Checkout-icon" /> { form.title }
		</div>

		<Component />
	</div>
)}