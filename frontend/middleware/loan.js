import loanApi from 'utilities/api/loan';
import { receiveLoan } from 'actions/loan';

const requestLoan = (api, store, action) => {
	let promise = api.get(action.id);

	promise.done(response => {
		store.dispatch(receiveLoan(response.loan));
	});
}

export default store => next => action => {
	let api = loanApi(store.dispatch);

	switch (action.type) {
		case "REQUEST_LOAN":
			requestLoan(api, store, action);
			break;
	}
	return next(action);
}