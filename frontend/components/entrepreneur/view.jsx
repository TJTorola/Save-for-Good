import React from 'react';

import { nlToP, toCurrency, imgUrl } from 'utilities/helper';
import { Icon, InvestButton } from 'modules/index';

const mapUrl = loc => `//maps.googleapis.com/maps/api/staticmap?center=${loc}&zoom=4&size=800x400&markers=color:red%7C${loc}&key=AIzaSyBmqYlVFpuSr2yWPh0ZPhP-I5GKGWnshjc`
const mapStyle = loc => ({
	backgroundImage: `url('${mapUrl(loc)}')`
});

const lightboxOptions = (loan) => ({
	amount: 0,
	name: loan.entrepreneur.name
});

const meterWidth = (loan) => ({
	width: `${100 * (loan.contributed / loan.amount)}%`
});

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
							<div className="LoanHead-map" style={ mapStyle(loan.entrepreneur.location) }>
								<h1>{ loan.entrepreneur.name }</h1>
								<p>{ loan.entrepreneur.location }</p>
							</div>
						</div>
					</section>
				</div>

				<section className="LoanPitch">
					<div className="LoanPitch-meter">
						<div className="LoanPitch-fill" style={ meterWidth(loan) } />
					</div>
					<div className="container u-clearfix">
						<h2>{ toCurrency(loan.amount) }</h2>
						<p>{ loan.description }</p>
						<div className="LoanPitch-invest">
							<InvestButton loan={ loan } />
						</div>
					</div>
				</section>

				<div className="container">
					<section className="LoanBody card flex">
						<div className="LoanBody-description f-grow">
							<h1>About { loan.entrepreneur.name }:</h1>
							<p dangerouslySetInnerHTML={ {__html: nlToP(loan.entrepreneur.about) } } />
						</div>
						<div className="LoanBody-stats">
						</div>
					</section>
				</div>
			</div>
		)
	} else {
		return <div>loading...</div>;
	}
};