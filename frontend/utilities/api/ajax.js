import { ajax, parseJSON } from 'jquery';
// import { receiveErrors } from 'actions/errors';

// const getResponse = response => {
// 	if (response.responseText) {
// 		return parseJSON(response.responseText);
// 	} else {
// 		return response;
// 	}
// }

// const catchMessages = dispatch => response => {
// 	response = getResponse(response);

// 	if (response.errors) {
// 		dispatch(receiveErrors(response.errors));
// 	}
// };

const setCSRFToken = () => {
	let token = document.querySelector('meta[name="csrf-token"]');
	token = token.getAttribute('content');

	return xhr => {
		xhr.setRequestHeader('X-CSRF-Token', token);
	};
};

export default (options, dispatch) => {
	options.beforeSend = setCSRFToken();

	let promise = ajax(options);
	// promise.always(catchMessages(dispatch));

	return promise;
}