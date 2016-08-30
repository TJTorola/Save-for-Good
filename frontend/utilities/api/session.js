import ajax from './ajax';

export default dispatch => {
	post: user => ajax({
		method: 'POST',
		url: '/api/session',
		data: { user }
	}, dispatch),

	destroy: () => ajax({
		method: 'DELETE',
		url: '/api/session'
	}, dispatch)
};