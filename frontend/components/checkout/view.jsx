import React from 'react';

import Submit       from './submit'
import Confirm      from './confirm'
import Billing      from './billing'
import Contribution from './contribution'

export default () => (
	<div className="Checkout container">
		<Confirm show={ true } />
		<Contribution show={ false } />
		<Billing show={ false } />
		<Submit show={ false } />
	</div>
)