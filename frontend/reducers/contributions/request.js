import { merge } from 'lodash';

const setPage = (state, page) => {
	return merge({}, state, { page });
}

export default (state = { page: 0 }, action) => {
	switch (action.type) {
		case "SET_CONTRIBUTIONS_PAGE":
			return setPage(state, action.page);
		default:
			return state;
	}
};