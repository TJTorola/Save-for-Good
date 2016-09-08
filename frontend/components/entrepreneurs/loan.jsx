import React from 'react';

import { go, imgUrl, toCurrency } from 'utilities/helper';
import { Icon, InvestButton } from 'modules/index';

const show = id => go(`entrepreneur/${id}`);

const meterWidth = (loan) => ({
	width: `${100 * (loan.contributed / loan.amount)}%`
});

const meterStyle = (loan) => (
	(loan.contributed / loan.amount) > .5 ? 'LoansMeter-halfFull' : 'LoansMeter-halfEmpty'
);

const meterStatus = loan => {
	if (loan.contributed === 0) {
		return "No Contributions yet!";
	} else if (loan.contributed === loan.amount) {
		return "Loan is fully funded!";
	} else {
		return `${ toCurrency(loan.amount - loan.contributed) } Left`;
	}
}

export default ({ loan }) => (
<section className="LoansItem u-full-width flex">
	<div className="card LoansItem-pic">
		<img src={ imgUrl(loan) } />
	</div>

	<div className="f-grow">
		<div className="card LoansItem-body">
			<h1 className="LoansItem-header">{ loan.entrepreneur.name } - { toCurrency(loan.amount) }</h1>
			<p className="LoansItem-description">{ loan.description }</p>
		</div>

		<div className="toolbar">
			<div className="card-button black" onClick={ show(loan.id) }>
				<Icon i="plus"/> Learn More
			</div>

			<InvestButton loan={ loan } />
		</div>

		<div className="card LoansItem-meter">
			<span className="LoansMeter-fill u-grow-right" style={ meterWidth(loan) }>
				<span className={ meterStyle(loan) }>{ meterStatus(loan) }</span>
			</span>
		</div>
	</div>
</section>
);