import React from 'react';

import { Icon, go, imgUrl, toCurrency } from 'utilities/helper';
const show = id => go(`entrepreneur/${id}`);

export default ({ loan }) => (
<section className="entrepreneur u-full-width flex">
	<div className="card pic">
		<img src={ imgUrl(loan) } />
	</div>

	<div className="f-grow">
		<div className="card description">
			<h1>{ loan.entrepreneur.name } - { toCurrency(loan.amount) }</h1>
			<p>{ loan.description }</p>
		</div>

		<div className="buttons flex">
			<div className="card card-button green f-grow">
				<Icon i="s4g"/> Invest in { loan.entrepreneur.name }
			</div>

			<div className="card card-button learn-more" onClick={ show(loan.id) }>
				<Icon i="plus"/> Learn More
			</div>
		</div>

		<div className="card meter">
			<span className="fill"><span className="status">$125 Remaining</span></span>
		</div>
	</div>
</section>
);