import { combineReducers } from 'redux';

import user   from 'reducers/user';
import Errors from 'reducers/errors';

export default combineReducers({ user, errors });