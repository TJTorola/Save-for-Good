import ajax from './ajax';

const sessionApi = dispatch => {
	post: user => ajax({
		method: 'POST',
		url: '/api/session',
		data: { user }
	}, dispatch),

	destroy: () => ajax({
		method: 'DELETE',
		url: '/api/session'
	}, dispatch)
}

export default sessionApi;