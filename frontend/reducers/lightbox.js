const defaultState = {
	show: false,
	loan: {}
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "SHOW_LIGHTBOX":
			return {
				show: true,
				loan: action.loan
			};
		case "HIDE_LIGHTBOX":
			return defaultState;
		default:
			return state;
	}
};