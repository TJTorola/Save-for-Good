const defaultState = {
	show: false,
	amount: 0,
	name: ""
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "SHOW_LIGHTBOX":
			return {
				show: true,
				amount: action.amount,
				name: action.name
			};
		case "HIDE_LIGHTBOX":
			return defaultState;
		default:
			return state;
	}
};