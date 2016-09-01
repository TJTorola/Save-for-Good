import ajax from './ajax';

export default dispatch => ({
	get: id => ajax({
		url: `/api/loan/#{id}`
	}, dispatch)
});