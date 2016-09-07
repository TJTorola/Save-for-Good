import { applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';

import validator from 'middleware/validator';
import user      from 'middleware/user';
import session   from 'middleware/session';
import loans     from 'middleware/loans';
import loan      from 'middleware/loan';
import payments  from 'middleware/payments';

const middleware = applyMiddleware( validator, user, session, loans, loan, payments );

const persistanceConfig = {
	key: 'save-for-good'
}

export default compose(
	middleware,
	persistState(null, persistanceConfig)
)