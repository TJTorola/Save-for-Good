import React from 'react';

import { go } from 'utilities/helper';
import { Icon } from 'modules/index';

const styles = show => {
	if (!show) { return { display: 'none' } }
}

export default ({ Form, link, title, show }) => (
	<div>
		<div className="Checkout-header card" onClick={ go(link) }>
			<Icon i={ show ? 'up' : 'down' } className="Checkout-icon" /> { title }
		</div>

		<div style={ styles(show) }>
			<Form />
		</div>
	</div>
);