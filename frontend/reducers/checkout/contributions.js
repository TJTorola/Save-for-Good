const addContribution = (state, newContribution) => {
	let newState = Array.from(state);
	newState = newState.filter(contribution => (
		contribution.loan.id !== newContribution.loan.id
	));

	if (newContribution.amount > 0) {
		newState.push(newContribution);
	}

	return newState;
}

export default (state = [], action) => {
	switch (action.type) {
		case "ADD_CONTRIBUTION":
			return addContribution(state, action.contribution);
		default:
			return state;
	}
};