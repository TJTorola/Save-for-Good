import { applyMiddleware } from 'redux';

import userMiddleware    from 'middleware/user';
import sessionMiddleware from 'middleware/session';

export default applyMiddleware(
	userMiddleware,
	sessionMiddleware
);