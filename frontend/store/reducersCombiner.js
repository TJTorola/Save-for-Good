import { combineReducers } from 'redux';

import user                    from 'reducers/user';
import loan                    from 'reducers/loan';
import charts                  from 'reducers/charts';
import errors                  from 'reducers/errors';
import lightbox                from 'reducers/lightbox';

import loansRequest            from 'reducers/loans/request';
import loansCollection         from 'reducers/loans/collection';

import contributionsRequest    from 'reducers/contributions/request';
import contributionsCollection from 'reducers/contributions/collection';

import step                    from 'reducers/checkout/step';
import donation                from 'reducers/checkout/donation';
import newContributions        from 'reducers/checkout/contributions';

const appReducer = combineReducers({ 
	user,
	errors,
	loan,
	lightbox,
	charts,
	loans: combineReducers({
		collection: loansCollection,
		request: loansRequest
	}),
	contributions: combineReducers({
		collection: contributionsCollection,
		request: contributionsRequest
	}),
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