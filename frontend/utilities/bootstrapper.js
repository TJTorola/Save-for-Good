import { parseJSON } from 'jquery';

import { setStep }        from 'actions/checkout';
import { receiveUser }    from 'actions/user';
import { destroySession } from 'actions/session';
import { requestLoan }    from 'actions/loan';
import { requestLoans }   from 'actions/loans';

class Bootstrapper {
	constructor(store) {
		this.store = store;

		this.user  = this.user.bind(this);
		this.loans = this.loans.bind(this);
		this.loan  = this.loan.bind(this);
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

	setStep(step) {
		return () => { this.store.dispatch(setStep(step)) };
	}
}

export default Bootstrapper;