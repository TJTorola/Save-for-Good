import userApi from 'utilities/api/user';
import { receiveUser } from 'actions/user';

const createUser = (api, store, action) => {
	let promise = api.post(action.user);

	promise.done(response => {
		store.dispatch(receiveUser(response.user));
	});
}

export default store => next => action => {
	let api = new userApi(store.dispatch);

	switch (action.type) {
		case "CREATE_USER":
			createUser(api, store, action);
			break;
	}
	return next(action);
}