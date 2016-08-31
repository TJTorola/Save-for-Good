import { browserHistory } from 'react-router';

import userApi from 'utilities/api/user';
import { receiveUser } from 'actions/user';

const createUser = (api, store, action) => {
	let promise = api.post(action.user);

	promise.done(response => {
		store.dispatch(receiveUser(response.user));
		browserHistory.push('portfolio');
	});
}

export default store => next => action => {
	let api = userApi(store.dispatch);

	switch (action.type) {
		case "CREATE_USER":
			createUser(api, store, action);
			break;
	}
	return next(action);
}