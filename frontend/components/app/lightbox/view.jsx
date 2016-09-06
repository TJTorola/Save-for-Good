import React from 'react';

import { toCurrency, go } from 'utilities/helper';
import { Icon } from 'modules/index';

class Lightbox extends React.Component {
	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);
		this.add = this.add.bind(this);
	}

	addContribution() {
		let amount = document.querySelector('#contribution');
		amount = parseFloat(amount.value);
		amount = parseInt(amount * 100);

		let loan = this.props.loan;

		this.props.addContribution({ loan, amount });
	}

	submit() {
		this.addContribution();
		this.props.hide();
		go('/checkout')();
	}

	add() {
		this.addContribution();
		this.props.hide();
	}

	styles(show) {
		if (!show) { return { display: 'none' } };
	}

	render() {
		let { styles, submit, add } = this;
		let { loan, show, hide } = this.props;

		return (
			<div style={ styles(show) }>
				<div className="Fade" onClick={ hide } />
				<div className="Lightbox card">
					<Icon className="Lightbox-close" onClick={ hide } i="times" />
					<h1>Great!</h1>
					<div>How much would you like to contribute?</div>

					<h2>
						{ toCurrency(loan.amount) } remains to fill<br />
						{ loan.name }'s loan.
					</h2>

					<label htmlFor="contribution">Your Contribution:</label>
					<input type="text" id="contribution" defaultValue={ 25.00 } />
				</div>
				<div className="Lightbox-toolbar toolbar">
					<div className="card-button black f-grow" onClick={ add }>
						<Icon i="plus" /> Add and Continue
					</div>

					<div className="card-button green f-grow" onClick={ submit }>
						<Icon i="cart" /> Checkout
					</div>
				</div>
			</div>
		);
	}
}

export default Lightbox;