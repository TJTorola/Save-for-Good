export const requestContributions = () => ({
	type: "REQUEST_CONTRIBUTIONS"
});

export const receiveContributions = contributions => ({
	type: "RECEIVE_CONTRIBUTIONS",
	contributions
});

export const setContributionsPage = page => ({
	type: "SET_CONTRIBUTIONS_PAGE",
	page
})

export const receiveContributionsByMonth = contributionsByMonth => ({
	type: "RECEIVE_CONTRIBUTIONS_BY_MONTH",
	contributionsByMonth
});

export const receiveRepaymentsByMonth = repaymentsByMonth => ({
	type: "RECEIVE_REPAYMENTS_BY_MONTH",
	repaymentsByMonth
});