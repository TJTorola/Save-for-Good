export default (state = 'CONFIRM', action) => {
	switch (action.type) {
		case "SET_STEP":
			return action.step;
		case "CLEAR_CHECKOUT":
			return "CONFIRM";
		default:
			return state;
	}
};