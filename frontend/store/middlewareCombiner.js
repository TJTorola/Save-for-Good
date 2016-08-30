import { applyMiddleware } from 'redux';

import user    from 'middleware/user';
import session from 'middleware/session';

export default applyMiddleware( user, session );