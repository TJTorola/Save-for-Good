import React from 'react';

import * as icons from 'utilities/icons';

const imgUrl = loan => `//res.cloudinary.com/tjcloud/image/upload/w_300,h_300,c_fill/e${loan.id}.jpeg`;

export default ({ loan }) => {
	if (loan) {
		return (
			<div>
				<div className="container">
					<section className="LoanHead flex">
						<div className="LoanHead-img card">
							<img src={ imgUrl(loan) } />
						</div>
						<div className="LoanHead-title card f-grow">
							<h1>{ loan.entrepreneur.name }</h1>
							<p>{ loan.entrepreneur.location }</p>
						</div>
					</section>
				</div>

				<section className="LoanPitch">
					<div className="container u-clearfix">
						<h2>{ loan.amount / 100 }</h2>
						<p>{ loan.description }</p>
						<div className="card card-button green pull-right">
							{ icons.s4g } Invest in { loan.entrepreneur.name }
						</div>
					</div>
				</section>

				<div className="container">
					<section className="LoanBody">
						<div className="LoanBody-meter card">
						</div>

						<div className="LoanBody-about card">
							<h1>About { loan.entrepreneur.name }:</h1>
							<p>{ loan.entrepreneur.about }</p>
						</div>
					</section>

					<section className="LoanFooter card"></section>
				</div>
			</div>
		)
	} else {
		return <div>loading...</div>;
	}
};