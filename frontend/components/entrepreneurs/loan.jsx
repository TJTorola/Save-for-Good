import React from 'react';
import { browserHistory } from 'react-router';

import * as icons from 'utilities/icons';

const imgUrl = loan => `//res.cloudinary.com/tjcloud/image/upload/w_300,h_300,c_fill/e${loan.id}.jpeg`;
const go = path => () => browserHistory.push(path);
const show = id => go(`entrepreneur/${id}`);

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
				{ icons.s4g } Invest in { loan.entrepreneur.name }
			</div>

			<div className="card card-button learn-more" onClick={ show(loan.id) }>
				{ icons.plus } Learn More
			</div>
		</div>

		<div className="card meter">
			<span className="fill"><span className="status">$125 Remaining</span></span>
		</div>
	</div>
</section>
);