import { combineReducers } from 'redux';

import user   from 'reducers/user';
import errors from 'reducers/errors';
import loans  from 'reducers/loans';

export default combineReducers({ user, errors, loans });