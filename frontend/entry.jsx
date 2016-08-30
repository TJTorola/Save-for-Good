import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'components/root';

document.addEventListener('DOMContentLoaded', () => {
	let rootEl = document.querySelector('#root');

	ReactDOM.render(<Root />, rootEl);
});