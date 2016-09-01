import { applyMiddleware } from 'redux';

import user    from 'middleware/user';
import session from 'middleware/session';
import loans   from 'middleware/loans';
import loan    from 'middleware/loan';

export default applyMiddleware( user, session, loans, loan );