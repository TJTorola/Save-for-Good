import React from 'react';
import { Line } from 'react-chartjs';

import { toCurrency } from 'utilities/helper';

const rows = contributions => contributions.map(contribution => (
	<tr key={ contribution.id }>
		<td>{ contribution.loan.entrepreneur.name } ({ contribution.loan.entrepreneur.location }) - { toCurrency(contribution.loan.amount) }</td>
		<td>{ toCurrency(contribution.amount) }</td>
		<td>{ toCurrency(contribution.donationAmount) }</td>
		<td className="u-text-right">{ contribution.loan.repaymentDate }</td>
		<td className="u-text-right">{ contribution.loan.status }</td>
	</tr>
));

// const chartOptions()

export default ({ contributions }) => (
	<div className="container">
		<section className="card card-header">
			<h1>Portfolio</h1>
		</section>

		<section className="card">
			<table className="Portfolio-table">
				<thead>
					<tr>
						<th>Loan</th>
						<th>Contribution</th>
						<th>Donation</th>
						<th className="u-text-right">Repayment Date</th>
						<th className="u-text-right">Loan Status</th>
					</tr>
				</thead>
				<tbody>
					{ rows(contributions) }
				</tbody>
			</table>

			
		</section>
	</div>
);