import { receiveErrors } from 'actions/errors';

const validateContribution = (store, contribution) => {
	if (contribution.amount > contribution.loan.amount) {
		store.dispatch(receiveErrors(["Contribution cannot exceed Loan amount."]));
		return false;
	} else {
		return true;
	}
}

export default store => next => action => {
	switch (action.type) {
		default:
			return next(action);
	}
}