import React from 'react';

export default ({ loan }) => (
<section className="entrepreneur u-full-width flex">
	<div className="card pic">
		<img src="img/0.jpeg" />
	</div>

	<div className="f-grow">
		<div className="card description">
			<h1>{ loan.entrepreneur.fullName } - ${ loan.amount / 100 }</h1>
			<p>{ loan.description }</p>
		</div>

		<div className="buttons flex">
			<div className="card card-button invest f-grow">
				Invest in { loan.entrepreneur.fullName }
			</div>

			<div className="card card-button learn-more">
				Learn More
			</div>
		</div>

		<div className="card meter">
			<span className="fill"><span className="status">$125 Remaining</span></span>
		</div>
	</div>
</section>
);