import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App      from './app/view';
import Login    from './login/container';
import Register from './register/container';

export default () => (
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<Route path="login" component={ Login } />
			<Route path="register" component={ Register } />
		</Route>
	</Router>
);