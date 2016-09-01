export default (state = null, action) => {
	switch (action.type) {
		case "RECEIVE_LOAN":
			return action.loan;
		case "REQUEST_LOAN":
			return null;
		default:
			return state;
	}
};