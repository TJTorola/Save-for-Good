import React from 'react';

import { linkState, toCurrency, toArray, go } from 'utilities/helper';
import { Tree, Icon } from 'modules/index';

const linkDonation = setDonation => e => {
	setDonation(e.target.value);
};

const total = contributions => (
	toArray(contributions).reduce((accum, contribution) => (
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

const name = contributions => {
	let first;
	for (first in contributions) break;

	return contributions[first].loan.name;
}

export default ({ contributions, percent, setDonation }) => (
	<div>
		<div className="Donate card">
			<div className="Donate-content">
				<div>
					<h2 className="Donate-title">Help Save for Good</h2>
					<div className="Donate-pitch">
						Save for Good works hard to keep people in the field in order to maintain respectful<br />
						relationships directly with entrepreneurs like { name(contributions) }. If you appriciate our work, one<br />
						thing you can do to help us keep going is to donate a portion of your returns<br />
						back to Save for Good at the end of your Entrepreneurs Loan cycle.<br />
						<br />
						<strong>This donation will not be made until <i>after</i> the loan has been disbursed and then paid back.</strong>
					</div>
				</div>

				<div>
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
			</div>

			<Tree percent={ percent } className="Donate-tree" />
		</div>

		<div className="toolbar">
			<div className="card-button black" onClick={ go('/checkout/confirm') }>
				<Icon i='left' /> Previous Step
			</div>
			<div className="card-button green" onClick={ go('/checkout/billing') }>
				<Icon i='right' /> Next Step
			</div>
		</div>
	</div>
);