import React from 'react';

import { Icon } from 'utilities/helper';

const hideLightbox = () => {
	console.log('hidden!');
}

const styles = show => {
	if (!show) { return { display: 'none' } };
};

export default ({ show, name, amount }) => (
	<div style={ styles(show) }>
		<div className="Fade" onClick={ hideLightbox } />
		<div className="Lightbox card">
			<Icon className="Lightbox-close" onClick={ hideLightbox } i="times" />
			<h1>Great!</h1>
			<div>How much would you like to contribute?</div>

			<h2>
				AMOUNT remains to fill<br />
				ENTS loan.
			</h2>

			<label htmlFor="contribution">Your Contribution:</label>
			<input type="text" id="contribution" />
		</div>
		<div className="Lightbox-toolbar">
			<div className="card-button green f-grow">
				<Icon i="cart" /> Checkout
			</div>

			<div className="card-button black f-grow">
				<Icon i="plus" /> Add and Continue
			</div>
		</div>
	</div>
);