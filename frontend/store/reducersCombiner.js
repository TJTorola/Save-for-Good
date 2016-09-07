import { combineReducers } from 'redux';

import user             from 'reducers/user';
import loan             from 'reducers/loan';
import loans            from 'reducers/loans';
import charts           from 'reducers/charts';
import errors           from 'reducers/errors';
import lightbox         from 'reducers/lightbox';
import contributions    from 'reducers/contributions';

import step             from 'reducers/checkout/step';
import donation         from 'reducers/checkout/donation';
import newContributions from 'reducers/checkout/contributions';

export default combineReducers({ 
	user,
	errors,
	loans,
	loan,
	lightbox,
	contributions,
	charts,
	checkout: combineReducers({
		contributions: newContributions,
		step,
		donation
	})
});