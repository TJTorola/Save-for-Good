import contributionsApi from 'utilities/api/contributions';
import { 
	receiveContributions,
	receiveContributionsByMonth,
	receiveRepaymentsByMonth 
} from 'actions/contributions';

const requestContributions = (api, store, action) => {
	let promise = api.get();

	promise.done(response => {
		store.dispatch(receiveContributions(response.contributions));
		store.dispatch(receiveContributionsByMonth(response.contributionsByMonth));
		store.dispatch(receiveRepaymentsByMonth(response.repaymentsByMonth));
	});
}

export default store => next => action => {
	let api = contributionsApi(store.dispatch);

	switch (action.type) {
		case "REQUEST_CONTRIBUTIONS":
			requestContributions(api, store, action);
			break;
	}
	return next(action);
}