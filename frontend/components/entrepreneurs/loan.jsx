import React from 'react';

import { Icon, go, imgUrl, toCurrency } from 'utilities/helper';
const show = id => go(`entrepreneur/${id}`);

export default ({ loan, showLightbox }) => (
<section className="LoansItem u-full-width flex">
	<div className="card LoansItem-pic">
		<img src={ imgUrl(loan) } />
	</div>

	<div className="f-grow">
		<div className="card LoansItem-body">
			<h1 className="LoansItem-header">{ loan.entrepreneur.name } - { toCurrency(loan.amount) }</h1>
			<p className="LoansItem-description">{ loan.description }</p>
		</div>

		<div className="LoansItem-toolbar flex">
			<div className="card card-button green f-grow" onClick={ showLightbox.bind(null, loan) }>
				<Icon i="s4g"/> Invest in { loan.entrepreneur.name }
			</div>

			<div className="card card-button black f-grow" onClick={ show(loan.id) }>
				<Icon i="plus"/> Learn More
			</div>
		</div>

		<div className="card LoansItem-meter">
			<span className="LoansMeter-fill"><span className="LoansMeter-status">$125 Remaining</span></span>
		</div>
	</div>
</section>
);