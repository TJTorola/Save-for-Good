import ajax from './ajax';

export default dispatch => ({
	get: page => ajax({
		url: '/api/loans',
		data: { page }
	}, dispatch)
});