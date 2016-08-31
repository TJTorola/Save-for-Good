import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { parseJSON } from 'jquery';

import { receiveUser } from 'actions/user';

import App       from './app/view';
import Login     from './login/container';
import Register  from './register/container';
import Portfolio from './portfolio/view';

const bootstrapUser = store => () => {
	let user = document.querySelector('meta[name="current-user"]');

	if (user) {
		let content = parseJSON(user.getAttribute('content'));
		store.dispatch(receiveUser(content.user));
	}
}

export default ({ store }) => (
	<Router history={ browserHistory }>
		<Route path="/" component={ App } onEnter={ bootstrapUser(store) }>
			<Route path="login" component={ Login } />
			<Route path="register" component={ Register } />
			<Route path="portfolio" component={ Portfolio } />
		</Route>
	</Router>
);