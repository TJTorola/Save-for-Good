import { combineReducers } from 'redux';

import CurrentUser from 'reducers/current_user';
import Errors      from 'reducers/errors';

export default combineReducers({
	currentUser: CurrentUser,
	errors: Errors
});