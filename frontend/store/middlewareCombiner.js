import { applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';

import user     from 'middleware/user';
import session  from 'middleware/session';
import loans    from 'middleware/loans';
import loan     from 'middleware/loan';

const middleware = applyMiddleware( user, session, loans, loan );

const persistanceConfig = {
	key: 'save-for-good'
}

export default compose(
	middleware,
	persistState(null, persistanceConfig)
)