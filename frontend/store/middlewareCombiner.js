import { applyMiddleware } from 'redux';

import user    from 'middleware/user';
import session from 'middleware/session';
import loans   from 'middleware/loans';

export default applyMiddleware( user, session, loans );