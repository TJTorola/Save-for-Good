import loansApi from 'utilities/api/payments';

export default store => next => action => {
	let api = new loansApi(store.dispatch);

	switch (action.type) {
		case "ADD_PAYMENT":
			let promise = api.create({
				contributions: store.getState().checkout.contributions,
				stripe_key: action.key
			});

			promise.success(response => {
				debugger
			});
			break;
	}
	return next(action);
}