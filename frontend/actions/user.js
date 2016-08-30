export const createUser = user => ({
	type: "CREATE_USER",
	user
});

export const receiveUser = user => ({
	type: "RECEIVE_USER",
	user
});

export const removeUser = () => ({ 
	type: "REMOVE_USER" 
});