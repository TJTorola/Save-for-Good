import React from 'react';
import { Line } from 'react-chartjs';

import { toArray } from 'utilities/helper';

const chartData = contributions => ({
	labels: Object.keys(contributions),
	datasets: [
		{
			label: "Contribution Amount by Month",
			fill: false,
			lineTension: 0.9,
			backgroundColor: "rgba(75,192,192,0.0)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: toArray(contributions),
			spanGaps: false,
		}
	]
})

export default ({ contributions }) => {
	if (contributions) {
		return (
			<Line 
				data={ chartData(contributions) } 
				options={ {} } 
				width="600" height="250"
			/>
		)
	} else {
		return <div>Loading...</div>;
	}
};