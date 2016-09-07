export default (state = [], action) => {
	switch (action.type) {
		case "RECEIVE_CONTRIBUTIONS":
			return action.contributions;
		default:
			return state;
	}
};