import ajax from './ajax';

const userApi = dispatch => {
	post: user => {
		return ajax({
			method: 'POST',
			url: '/api/user',
			data: { user }
		}, dispatch);
	}
}

export default userApi;