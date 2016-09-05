import React from 'react';

import { imgUrl } from 'utilities/helper';

export default ({ contribution }) => (
	<div className="Confirm-contribution">
		<div className="Contribution-pic">
			<img src={ imgUrl(contribution.loan) } alt=""/>
		</div>
		<div className="Contribution-body">
			<div className="Contribution-desc">
				<h2 className="Contribution-name">
					{ contribution.loan.name }
				</h2>
				<div className="Contribution-location">
					{ contribution.loan.location }
				</div>
			</div>
			<div className="Contribution-amount">
				<input type="text" defaultValue={ contribution.amount / 100 } />
			</div>
		</div>
	</div>
);