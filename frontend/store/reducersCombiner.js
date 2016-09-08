import { combineReducers } from 'redux';

import user             from 'reducers/user';
import loan             from 'reducers/loan';
import charts           from 'reducers/charts';
import errors           from 'reducers/errors';
import lightbox         from 'reducers/lightbox';
import contributions    from 'reducers/contributions';

import request          from 'reducers/loans/request';
import collection       from 'reducers/loans/collection';

import step             from 'reducers/checkout/step';
import donation         from 'reducers/checkout/donation';
import newContributions from 'reducers/checkout/contributions';

const appReducer = combineReducers({ 
	user,
	errors,
	loans: combineReducers({
		collection,
		request
	}),
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

export default (state, action) => {
	switch (action.type) {
		case "DESTROY_SESSION":
			state = undefined;
	}

	return appReducer(state, action);
}