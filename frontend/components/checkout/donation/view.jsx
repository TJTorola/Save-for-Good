import React from 'react';

import { linkState, toCurrency } from 'utilities/helper';

const linkDonation = setDonation => e => {
	setDonation(e.target.value);
};

const total = contributions => (
	contributions.reduce((accum, contribution) => (
		accum + contribution.amount
	), 0)
);

const returnValue = (percent, contributions) => {
	let returnFloat = 1 - (percent / 100)
	return Math.floor(returnFloat.toFixed(2) * total(contributions));
}

const donateValue = (percent, contributions) => {
	return total(contributions) - returnValue(percent, contributions);
}

export default ({ contributions, percent, setDonation }) => (
	<div className="Donate card">
		<h2 className="Donate-title">Help Save for Good</h2>
		<div className="Donate-pitch">
			Save for Good works hard to keep people in the field in order to maintain respectful<br />
			relationships directly with our Entrepreneur like ENT. If you appriciate our work one<br />
			thing you can do to help us keep doing this work is donate a portion of your returns<br />
			back to Save for Good at the end of your Entrepreneurs Loan cycle.
		</div>

		<div className="Donate-question">How much would you like to donate?</div>
		<div className="Donate-slider">
			<input type="range" onChange={ linkDonation(setDonation) } defaultValue={ percent } />
		</div>

		<div className="Breakdown-labels">
			<div>
				<strong>Your Return:</strong>
				<h4>{ toCurrency(returnValue(percent, contributions)) }</h4>
			</div>

			<h3 className="Breakdown-percent">{ percent } %</h3>

			<div>
				<strong className="u-text-right">Your Donation:</strong>
				<h4 className="u-text-right">{ toCurrency(donateValue(percent, contributions)) }</h4>
			</div>
		</div>
	</div>
);