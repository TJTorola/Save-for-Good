import React from 'react';

const listItems = errors => errors.map(error => {
	return (
		<div key={ error.id }>
			<h1>Error</h1>
			<p>
				{ error.message }
			</p>
		</div>
	);
});

export default ({ errors }) => (
	<section id="errors">
		{ listItems(errors) }
	</section>
);