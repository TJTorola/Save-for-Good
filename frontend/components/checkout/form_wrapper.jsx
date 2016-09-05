import React from 'react';

import { Icon, go } from 'utilities/helper'

const styles = show => {
	if (!show) { return { display: 'none' } }
}

export default ({ Form, show, link, title }) => (
	<div>
		<div className="Checkout-header card" onClick={ go(link) }>
			<Icon i={ show ? 'up' : 'down' } className="Checkout-icon" /> { title }
		</div>

		<div style={ styles(show) }>
			<Form />
		</div>

		<div class="card card-button black">< Last</div>
		<div class="card card-button green">Next ></div>
	</div>
)