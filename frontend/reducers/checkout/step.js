export default (state = 'CONFIRM', action) => {
	switch (action.type) {
		case "SET_STEP":
			return action.step;
		default:
			return state;
	}
};