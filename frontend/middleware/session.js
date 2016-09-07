import { browserHistory } from 'react-router';

import sessionApi from 'utilities/api/session';
import { receiveUser, removeUser } from 'actions/user';
import { go } from 'utilities/helper';

const createSession = (api, store, action) => {
	let promise = api.post(action.user);

	promise.done(response => {
		store.dispatch(receiveUser(response.user));
		go('/portfolio')();
	});
}

const destroySession = (api, store) => {
	let promise = api.destroy();

	promise.done(() => {
		go('/login')();
	});
}

export default store => next => action => {
	let api = sessionApi(store.dispatch);

	switch (action.type) {
		case "CREATE_SESSION":
			createSession(api, store, action);
			break;
		case "DESTROY_SESSION":
			destroySession(api, store);
			break;
	}
	return next(action);
}

