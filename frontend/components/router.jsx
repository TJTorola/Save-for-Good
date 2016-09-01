import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { parseJSON } from 'jquery';

import { receiveUser } from 'actions/user';
import { requestLoans } from 'actions/loans';

import App           from './app/view';
import Login         from './login/container';
import Register      from './register/container';
import Entrepreneurs from './entrepreneurs/container';
import Portfolio     from './portfolio/view';

const bootstrapUser = store => () => {
	let user = document.querySelector('meta[name="current-user"]');

	if (user) {
		let content = parseJSON(user.getAttribute('content'));
		store.dispatch(receiveUser(content.user));
	}
}

const loadLoans = store => () => {
	if (store.getState().loans.length === 0) {
		store.dispatch(requestLoans());
	}
}

export default ({ store }) => (
	<Router history={ browserHistory }>
		<Route path="/" component={ App } 
			onEnter={ bootstrapUser(store) }>
			<Route path="login" component={ Login } />
			<Route path="register" component={ Register } />
			<Route path="entrepreneurs" component={ Entrepreneurs } 
				onEnter={ loadLoans(store) } />
			<Route path="portfolio" component={ Portfolio } />
		</Route>
	</Router>
);