import { combineReducers } from 'redux';

import user          from 'reducers/user';
import errors        from 'reducers/errors';
import loans         from 'reducers/loans';
import loan          from 'reducers/loan';
import lightbox      from 'reducers/lightbox';

import step          from 'reducers/checkout/step';
import donation      from 'reducers/checkout/donation';
import contributions from 'reducers/checkout/contributions';

export default combineReducers({ 
	user,
	errors,
	loans,
	loan,
	lightbox,
	checkout: combineReducers({
		contributions,
		step,
		donation
	})
});