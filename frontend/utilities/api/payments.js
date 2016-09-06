import ajax from './ajax';

export default dispatch => ({
	create: payment => ajax({
		method: "POST",
		url: `/api/payments`,
		data: { payment }
	}, dispatch)
});