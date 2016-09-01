import React from 'react';

const imgUrl = loan => `//res.cloudinary.com/tjcloud/image/upload/w_300,h_300,c_fill/e${loan.id}.jpeg`;

export default ({ loan }) => (
<section className="entrepreneur u-full-width flex">
	<div className="card pic">
		<img src={ imgUrl(loan) } />
	</div>

	<div className="f-grow">
		<div className="card description">
			<h1>{ loan.entrepreneur.name } - ${ loan.amount / 100 }</h1>
			<p>{ loan.description }</p>
		</div>

		<div className="buttons flex">
			<div className="card card-button invest f-grow">
				Invest in { loan.entrepreneur.name }
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