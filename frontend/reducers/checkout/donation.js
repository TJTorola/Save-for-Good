export default (state = 50, action) => {
	switch (action.type) {
		case "SET_DONATION":
			return action.percent;
		case "CLEAR_CHECKOUT":
			return 50;
		default:
			return state;
	}
};