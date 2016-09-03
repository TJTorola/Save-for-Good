import React from 'react';

import { Icon, go } from 'utilities/helper'

const styles = show => {
	if (!show) { return { display: 'none' } }
}

export default ({ form, show }) => {
	const Component = form.component;

	return (
	<div>
		<div className="Checkout-header card" onClick={ go(form.link) }>
			<Icon i={ show ? 'up' : 'down' } className="Checkout-icon" /> { form.title }
		</div>

		<div style={ styles(show) }>
			<Component />
		</div>
	</div>
)}