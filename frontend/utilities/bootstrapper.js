import { parseJSON } from 'jquery';

import { go } from 'utilities/helper';

import { setStep }              from 'actions/checkout';
import { receiveUser }          from 'actions/user';
import { destroySession }       from 'actions/session';
import { requestLoan }          from 'actions/loan';
import { requestLoans }         from 'actions/loans';
import { requestContributions } from 'actions/contributions';
import { receiveErrors }        from 'actions/errors';

class Bootstrapper {
	constructor(store) {
		this.store = store;

		this.user          = this.user.bind(this);
		this.loan          = this.loan.bind(this);
		this.loans         = this.loans.bind(this);
		this.checkLogin    = this.checkLogin.bind(this);
		this.contributions = this.contributions.bind(this);
	}

	user() {
		let user = document.querySelector('meta[name="current-user"]');

		if (user) {
			let content = parseJSON(user.getAttribute('content'));
			this.store.dispatch(receiveUser(content.user));
		} else {
			this.store.dispatch(receiveUser(null));
		}
	}

	loans() {
		if (this.store.getState().loans.length === 0) {
			this.store.dispatch(requestLoans());
		}
	}

	loan(state) {
		this.store.dispatch(requestLoan(state.params.id));
	}

	contributions() {
		let user = this.store.getState().user;
		if (user) {
			this.store.dispatch(requestContributions());
		}
	}

	setStep(step) {
		return () => { this.store.dispatch(setStep(step)) };
	}

	checkLogin(nextState, replace) {
		let user = this.store.getState().user;
		if (!user) {
			this.store.dispatch(receiveErrors(['You must be logged in to view that page.']));
			replace('/login')
		}
	}
}

export default Bootstrapper;