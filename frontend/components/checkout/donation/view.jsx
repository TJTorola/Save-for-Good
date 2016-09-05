import React from 'react';

const handleChange = e => {
	console.log(e.target.value);
}

class Donate extends React.Component {
	render() {
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
					<input type="range" onChange={ handleChange } />
				</div>

				<div className="Breakdown-labels">
					<div>
						<strong>Your Return:</strong>
						<h4>$ 32.00</h4>
					</div>

					<h3 className="Breakdown-percent">50 %</h3>

					<div>
						<strong className="u-text-right">Your Donation:</strong>
						<h4 className="u-text-right">$ 50.00</h4>
					</div>
				</div>
			</div>
		);
	}
};

export default Donate;