import { combineReducers } from 'redux';

import user     from 'reducers/user';
import errors   from 'reducers/errors';
import loans    from 'reducers/loans';
import loan     from 'reducers/loan';
import lightbox from 'reducers/lightbox';
import checkout from 'reducers/checkout';

export default combineReducers({ 
	user,
	errors,
	loans,
	loan,
	lightbox,
	checkout
});