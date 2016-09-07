import { merge } from 'lodash';

const receiveContributionsByMonth = (state, contributionsByMonth) => {
	return merge({}, state, { contributionsByMonth });
}

const receiveRepaymentsByMonth = (state, repaymentsByMonth) => {
	return merge({}, state, { repaymentsByMonth });
}

const defaultState = { contributionsByMonth: null, repaymentsByMonth: null };

export default (state = defaultState, action) => {
	switch (action.type) {
		case "RECEIVE_CONTRIBUTIONS_BY_MONTH":
			return receiveContributionsByMonth(state, action.contributionsByMonth);
		case "RECEIVE_REPAYMENTS_BY_MONTH":
			return receiveRepaymentsByMonth(state, action.repaymentsByMonth);
		default:
			return state;
	}
};