import loansApi from 'utilities/api/loans';
import { receiveLoans } from 'actions/loans';

const requestLoans = (api, store, action) => {
	let promise = api.get();

	promise.done(response => {
		store.dispatch(receiveLoans(response.loans));
	});
}

export default store => next => action => {
	let api = loansApi(store.dispatch);

	switch (action.type) {
		case "REQUEST_LOANS":
			requestLoans(api, store, action);
			break;
	}
	return next(action);
}

