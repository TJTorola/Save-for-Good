import loansApi from 'utilities/api/loans';
import { 
	receiveLoans,
	setPage,
	loansLoading,
	loansLoaded
} from 'actions/loans';

const requestLoans = (api, store, action) => {
	store.dispatch(loansLoading());

	let page = store.getState().loans.request.page;
	let promise = api.get(page);

	promise.done(response => {
		store.dispatch(setPage(response.nextPage));
		store.dispatch(receiveLoans(response.loans));
		store.dispatch(loansLoaded());
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