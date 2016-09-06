import React from 'react';
import { browserHistory } from 'react-router';

import icons from './iconsSvg';

export const go = path => () => browserHistory.push(path);

export const toCurrency = amount => {
	return `$ ${(amount/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
};

export const nlToP = block => {
	block = block.replace(/\n{2}/g, '&nbsp;</p><p>');
	return block.replace(/\n/g, '&nbsp;<br />');
};

export const imgUrl = loan => (
	`//res.cloudinary.com/tjcloud/image/upload/w_300,h_300,c_fill/e${loan.id}.jpeg`
);

export const linkState = component => field => event => {
	let newState = {};
	newState[field] = event.target.value;
	component.setState(newState);
}

export const toArray = object => {
	let array = [];
	for (let key in object) {
		array.push(object[key]);
	}

	return array;
}

export const Icon = (props) => (
	<svg {...props}
		viewBox="0 0 1792 1792" 
		xmlns="http://www.w3.org/2000/svg">
		{ icons[props.i] }
	</svg>
);