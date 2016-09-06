import React from 'react';

import { Icon } from 'modules/index';

class Errors extends React.Component {
	constructor(props) {
		super(props);
		this.listItems = this.listItems.bind(this)
	}

	dismiss(id) {
		return () => this.props.removeError(id);
	}

	listItems() {
		return this.props.errors.map(error => (
			<div key={ error.id } onClick={ this.dismiss(error.id) } className="Error">
				<h1 className="Error-header">Error <Icon i="times" /></h1>
				<div className="Error-message">
					{ error.message }
				</div>
			</div>
		));
	}

	render () {
		return (
			<section className="Errors">
				{ this.listItems() }
			</section>
		)
	}
}

export default Errors