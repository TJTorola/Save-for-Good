import React from 'react';
import { Line } from 'react-chartjs-2';

import { toArray } from 'utilities/helper';

const labels = contributions => {
	let labels = Object.keys(contributions);
	labels.pop();
	labels.push("Now");
	return labels;
}

const chartData = contributions => ({
	labels: labels(contributions),
	datasets: [
		{
			label: "Contributions ($)",
			fill: false,
			lineTension: 0.1,
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
				width={ 600 } height={ 200 }
			/>
		)
	} else {
		return <div>Loading...</div>;
	}
};