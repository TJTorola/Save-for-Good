import { merge } from 'lodash';

const addContribution = (state, newContribution) => {
	let newState = merge({}, state);
	delete newState[newContribution.loan.id];

	if (newContribution.amount > 0) {
		newState[newContribution.loan.id] = newContribution;
	}

	return newState;
}

export default (state = {}, action) => {
	switch (action.type) {
		case "ADD_CONTRIBUTION":
			return addContribution(state, action.contribution);
		case "CLEAR_CHECKOUT":
			return {};
		default:
			return state;
	}
};