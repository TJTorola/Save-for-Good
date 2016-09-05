import React from 'react';

import { linkState, toCurrency } from 'utilities/helper';

class Donate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			percent: 50
		};
		this.linkState = linkState(this);
		this.returnValue = this.returnValue.bind(this);
		this.donateValue = this.donateValue.bind(this);
	}

	contributionTotal() {
		return this.props.contributions.reduce((accum, contribution) => (
			accum + contribution.amount
		), 0);
	}

	returnValue() {
		let returnFloat = 1 - (this.state.percent / 100)

		return Math.floor(returnFloat.toFixed(2) * this.contributionTotal());
	}

	donateValue() {
		return this.contributionTotal() - this.returnValue();
	}

	render() {
		let { linkState, returnValue, donateValue } = this;
		let { percent } = this.state;

		return (
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
					<input type="range" onChange={ linkState('percent') } />
				</div>

				<div className="Breakdown-labels">
					<div>
						<strong>Your Return:</strong>
						<h4>{ toCurrency(returnValue()) }</h4>
					</div>

					<h3 className="Breakdown-percent">{ percent } %</h3>

					<div>
						<strong className="u-text-right">Your Donation:</strong>
						<h4 className="u-text-right">{ toCurrency(donateValue()) }</h4>
					</div>
				</div>
			</div>
		);
	}
};

export default Donate;