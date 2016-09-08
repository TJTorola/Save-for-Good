import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { chain } from 'utilities/helper';

import App           from './app/view';
import Home          from './home/view';
import Login         from './login/container';
import Register      from './register/container';
import Checkout      from './checkout/container';
import Portfolio     from './portfolio/container';
import Entrepreneur  from './entrepreneur/container';
import Entrepreneurs from './entrepreneurs/container';

import Bootstrapper  from 'utilities/bootstrapper';

export default ({ store }) => {
	let bootstrap = new Bootstrapper(store);

	return (
	<Router history={ browserHistory }>
		<Route path="/" component={ App } 
			onEnter={ bootstrap.user }>
			<IndexRoute component={Home}/>

			<Route path="login" component={ Login } />
			<Route path="register" component={ Register } />
			<Route path="entrepreneurs" component={ Entrepreneurs } />
			<Route path="entrepreneur/:id" component={ Entrepreneur } 
				onEnter={ bootstrap.loan } />
			<Route path="portfolio" component={ Portfolio } 
				onEnter={ chain(bootstrap.checkLogin, bootstrap.contributions) } />
			<Route path="checkout" component={ Checkout }
				onEnter={ bootstrap.checkLogin }>
				<Router path="confirm"
					onEnter={ bootstrap.setStep("CONFIRM") } />
				<Router path="donation"
					onEnter={ bootstrap.setStep("DONATION") } />
				<Router path="billing"
					onEnter={ bootstrap.setStep("BILLING") } />
			</Route>
		</Route>
	</Router>
)};