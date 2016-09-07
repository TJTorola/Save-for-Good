import ajax from './ajax';

export default dispatch => ({
	get: () => ajax({
		url: '/api/contributions'
	}, dispatch)
});