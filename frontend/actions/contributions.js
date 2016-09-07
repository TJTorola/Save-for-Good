export const requestContributions = () => ({
	type: "REQUEST_CONTRIBUTIONS"
});

export const receiveContributions = contributions => ({
	type: "RECEIVE_CONTRIBUTIONS",
	contributions
});