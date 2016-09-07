import loansApi          from 'utilities/api/payments';
import { toArray }       from 'utilities/helper';
import { clearCheckout } from 'actions/checkout';

const addPayment = (api, store, action) => {
	let contributions = toArray(store.getState().checkout.contributions)
	let donation = store.getState().checkout.donation
	let promise = api.create({
		stripe_key: action.key,
		donation,
		contributions
	});

	promise.done(response => {
		store.dispatch(clearCheckout())
	});
}

export default store => next => action => {
	let api = new loansApi(store.dispatch);

	switch (action.type) {
		case "ADD_PAYMENT":
			addPayment(api, store, action)
			
			break;
	}
	return next(action);
}