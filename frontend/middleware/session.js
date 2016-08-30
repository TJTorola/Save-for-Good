import userApi from 'utilities/api/user';
import { receiveUser } from 'actions/user';

const UserMiddleware = store => next => action => {
	let promise;
	let api = new userApi(store.dispatch);

	switch (action.type) {
		case "CREATE_USER":
			promise = api.post(action.user);

			promise.done(response => {
				store.dispatch(receiveUser(response.user));
			});
			break;
	}
	return next(action);
}

export default UserMiddleware;