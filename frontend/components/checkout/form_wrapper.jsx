import React from 'react';

import { Icon, go } from 'utilities/helper'

const styles = show => {
	if (!show) { return { display: 'none' } }
}

export default ({ Form, link, title, show, next, prev,
	nextText = "Next Step",
	nextIcon = "right",
	prevText = "Previous Step",
	prevIcon = "left"
}) => (
	<div>
		<div className="Checkout-header card" onClick={ go(link) }>
			<Icon i={ show ? 'up' : 'down' } className="Checkout-icon" /> { title }
		</div>

		<div style={ styles(show) }>
			<Form />

			<div className="toolbar">
				<div className="card-button black" onClick={ go(prev) }>
					<Icon i={ prevIcon } /> { prevText }
				</div>
				<div className="card-button green" onClick={ go(next) }>
					<Icon i={ nextIcon } /> { nextText }
				</div>
			</div>
		</div>
	</div>
);