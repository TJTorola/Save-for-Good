import React from 'react';

export default () => (
	<div className="card Submit">
		<div className="Submit-contributions">
			<h3>Contributions:</h3>
		</div>

		<table className="table">
			<thead>
				<tr>
					<th>Entrepreneur</th>
					<th className="u-text-right">Contributed</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Jane (Kenya, Kerugoya)</td>
					<td className="u-text-right">$ 35.00</td>
				</tr>
				<tr>
					<td>Isaac (Ghana, Accra)</td>
					<td className="u-text-right">$ 50.00</td>
				</tr>
				<tr>
					<td className="u-text-right"><strong>Total:</strong></td>
					<td className="u-text-right">$ 85.00</td>
				</tr>
			</tbody>
		</table>

		<div className="Submit-donation">
			<h3>Donation:</h3>
			<div>Donation to Save for Good is made <i>after</i> loan is disbursed to Entrepreneur and paid back.</div>
		</div>
		<div className="SubmitDonation">
			<h4>Percent: 12 %</h4>
			<h4>Amount: $ 10.20</h4>
		</div>
	</div>
);