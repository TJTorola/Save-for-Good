import React from 'react';

const listItems = errors => errors.map(error => {
	return (
		<li key={ error.id }>
			{ error.message }
		</li>
	);
});

export default ({ errors }) => (
	<ul>
		{ listItems(errors) }
	</ul>
);