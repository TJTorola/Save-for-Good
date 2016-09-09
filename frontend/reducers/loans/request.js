import { merge } from 'lodash';

const setPage = (state, page) => {
	return merge({}, state, { page });
}

export default (state = { page: 0, loading: false, fullyLoaded: false }, action) => {
	switch (action.type) {
		case "SET_LOANS_PAGE":
			return setPage(state, action.page);
		case "CLEAR_LOANS":
			return merge({}, state, { page: 0, fullyLoaded: false });
		case "LOANS_LOADING":
			return merge({}, state, { loading: true });
		case "LOANS_LOADED":
			return merge({}, state, { loading: false });
		case "LOANS_FULLY_LOADED":
			return merge({}, state, { fullyLoaded: true });
		default:
			return state;
	}
};