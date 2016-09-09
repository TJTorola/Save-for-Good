export const requestLoans = () => ({
	type: "REQUEST_LOANS"
});

export const receiveLoans = loans => ({
	type: "RECEIVE_LOANS",
	loans
});

export const setLoansPage = page => ({
	type: "SET_LOANS_PAGE",
	page
});

export const clearLoans = () => ({
	type: "CLEAR_LOANS"
});

export const loansLoading = () => ({
	type: "LOANS_LOADING"
});

export const loansLoaded = () => ({
	type: "LOANS_LOADED"
});

export const loansFullyLoaded = () => ({
	type: "LOANS_FULLY_LOADED"
});