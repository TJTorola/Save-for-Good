import { merge } from 'lodash';

const setPage = (state, page) => {
	return merge({}, state, { page });
}

export default (state = { page: 0, loading: false }, action) => {
	switch (action.type) {
		case "SET_PAGE":
			return setPage(state, action.page);
		case "RESET_PAGE":
			return merge({}, state, { page: 0 });
		case "LOANS_LOADING":
			return merge({}, state, { loading: true });
		case "LOANS_LOADED":
			return merge({}, state, { loading: false });
		default:
			return state;
	}
};