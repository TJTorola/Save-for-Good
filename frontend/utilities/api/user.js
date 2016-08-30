import ajax from './ajax';

export default dispatch => ({
	post: user => ajax({
		method: 'POST',
		url: '/api/user',
		data: { user }
	}, dispatch)
});