import { combineReducers } from 'redux';

import user   from 'reducers/user';
import errors from 'reducers/errors';

export default combineReducers({ user, errors });