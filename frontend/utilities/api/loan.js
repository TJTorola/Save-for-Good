import ajax from './ajax';

export default dispatch => ({
	get: id => ajax({
		url: `/api/loans/${id}`
	}, dispatch)
});