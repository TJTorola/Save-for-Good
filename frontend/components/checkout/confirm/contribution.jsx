import React from 'react';

import { imgUrl } from 'utilities/helper';
import { Input } from 'modules/index';

const test = value => parseFloat(value) == value && parseFloat(value) >= 0

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
				<Input id="amount" placeholder="Amount"
					errorMsg="Amount must be a positive number."
					pattern={ test }
					defaultValue={ contribution.amount / 100 } />
			</div>
		</div>
	</div>
);