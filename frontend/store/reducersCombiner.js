import { combineReducers } from 'redux';

import user   from 'reducers/user';
import errors from 'reducers/errors';
import loans  from 'reducers/loans';
import loan   from 'reducers/loan';

export default combineReducers({ user, errors, loans, loan });