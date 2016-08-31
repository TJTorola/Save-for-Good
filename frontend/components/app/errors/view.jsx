import React from 'react';

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
			<div key={ error.id } onClick={ this.dismiss(error.id) } className="shadow">
				<h1>Error <i className="fa fa-times u-pull-right"></i></h1>
				<p>
					{ error.message }
				</p>
			</div>
		));
	}

	render () {
		return (
			<section id="errors">
				{ this.listItems() }
			</section>
		)
	}
}

export default Errors