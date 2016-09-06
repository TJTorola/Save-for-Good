import React from 'react';
import { browserHistory } from 'react-router';

export const go = path => () => browserHistory.push(path);

export const toCurrency = (amount, length = 2) => {
	return `$ ${(amount/100).toFixed(length).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
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