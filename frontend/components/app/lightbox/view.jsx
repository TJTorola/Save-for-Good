import React from 'react';

import { toCurrency, go } from 'utilities/helper';
import { Icon }           from 'modules/index';

class Lightbox extends React.Component {
	constructor(props) {
		super(props);

		this.submit          = this.submit.bind(this);
		this.add             = this.add.bind(this);
		this.addContribution = this.addContribution.bind(this);
		this.handleChange    = this.handleChange.bind(this);

		this.state = {
			amount: 25
		}
	}

	addContribution() {
		let amount = this.state.amount;
		amount = parseFloat(amount);
		amount = parseInt(amount * 100);

		let loan = this.props.loan;

		if (amount > loan.amount) {
			this.props.addError("Contribution may not exceed loan amount.");
			return false;
		} else {
			this.props.addContribution({ loan, amount });
			return true;
		}
	}

	componentWillReceiveProps(nextProps) {
		let contribution = nextProps.contributions[nextProps.loan.id];
		if (contribution) {
			this.setState({ amount: contribution.amount / 100 })
		} else {
			this.setState({ amount: 25 })
		}
	}

	submit() {
		if (this.addContribution()) {
			this.props.hide();
			go('/checkout/confirm')();
		}
	}

	add() {
		if (this.addContribution()) {
			this.props.hide();
		}
	}

	handleChange(event) {
		this.setState({ amount: event.target.value });
	}

	styles(show) {
		if (!show) { return { display: 'none' } };
	}

	render() {
		let { styles, submit, add, initialAmount, handleChange } = this;
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
					<input type="text" id="contribution" value={ this.state.amount } onChange={ handleChange } />
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