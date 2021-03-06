import loansApi from 'utilities/api/loans';
import { 
	receiveLoans,
	setLoansPage,
	loansLoading,
	loansLoaded,
	loansFullyLoaded
} from 'actions/loans';

const requestLoans = (api, store, action) => {
	store.dispatch(loansLoading());

	let page = store.getState().loans.request.page;
	let promise = api.get(page);

	promise.done(response => {
		if (response.loans.length === 0) {
			store.dispatch(loansFullyLoaded());
		} else {
			store.dispatch(receiveLoans(response.loans));
		}

		store.dispatch(setLoansPage(response.nextPage));
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