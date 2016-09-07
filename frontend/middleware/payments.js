import loansApi from 'utilities/api/payments';
import { toArray } from 'utilities/helper';

export default store => next => action => {
	let api = new loansApi(store.dispatch);

	switch (action.type) {
		case "ADD_PAYMENT":
			let contributions = toArray(store.getState().checkout.contributions)
			let donation = store.getState().checkout.donation
			let promise = api.create({
				stripe_key: action.key,
				donation,
				contributions
			});

			promise.success(response => {
				debugger
			});
			break;
	}
	return next(action);
}