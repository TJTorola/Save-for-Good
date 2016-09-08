export const requestLoans = () => ({
	type: "REQUEST_LOANS"
});

export const receiveLoans = loans => ({
	type: "RECEIVE_LOANS",
	loans
});

export const setPage = page => ({
	type: "SET_PAGE",
	page
});

export const resetPage = () => ({
	type: "RESET_PAGE"
});

export const loansLoading = () => ({
	type: "LOANS_LOADING"
});

export const loansLoaded = () => ({
	type: "LOANS_LOADED"
});
