export default (state = 50, action) => {
	switch (action.type) {
		case "SET_DONATION":
			return action.percent;
		default:
			return state;
	}
};