import { merge } from 'lodash';

const defaultState = {
	contributions: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_CONTRIBUTION":
			let newState = merge({}, state);
			newState.contributions.push(action.contribution);

			return newState;
		default:
			return state;
	}
};