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

			<div className="toolbar">
				<div className="card-button black"><Icon i="left" /> Last</div>
				<div className="card-button green">Next <Icon i="right" /></div>
			</div>
		</div>
	</div>
)