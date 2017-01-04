# Save-for-Good
[link]: http://www.save-for-good.com

<img src="https://github.com/TJTorola/Save-for-Good/raw/master/docs/readme_imgs/preview.png" width="100%" />

[Save for Good][link] is a crowdsourced Micro-Lending similar to the Kiva. Parternered with Maple Microfinance Save for Good is able to find Entrepreneurs who do not have access to traditional loan services and connect them with people who are willing to finance their loans.

##Framework & APIs
Save for Good (S4G) is a single page web app built with React-Redux and a Ruby on Rails backend. It uses Charts.js to render loan statistics, the Google Maps static API for maps, and the Stripe API to handle transactions.

##Features

###Error Reporting
Because S4G is a single page application it is able to maintain a global error/notification state. All ajax API calls are made through a wrapper function which monitors the responses for any errors.

####Ajax Wrapper

```javascript
const catchMessages = dispatch => response => {
	response = getResponse(response);

	if (response.errors) {
		dispatch(receiveErrors(response.errors));
	}
};

export default (options, dispatch) => {
	options.beforeSend = setCSRFToken();

	let promise = ajax(options);
	promise.always(catchMessages(dispatch));

	return promise;
}
```

Any caught errors are pushed to state where an `Errors` component watches and creates error notifications to the top right of the user's screen.

Add in an easy way to render errors on the backend.
####Error Rendering

```ruby
def add_errors(errors)
	flash.now[:errors] ||= []
	if errors.is_a?(Array)
		flash.now[:errors] += errors
	elsif errors.is_a?(String)
		flash.now[:errors] << errors
	else
		flash.now[:errors] += errors.errors.full_messages
	end
end

def render_errors(status = 500, new_errors = [])
	add_errors(new_errors)
	render json: { errors: errors }, status: status
end
```

And the end result is that communicating from the backend to the user is very simple.

###Inline SVG
S4G makes extensive use of inline SVG. Rather than relieing on webfonts to render icons, which comes with the baggage. S4G makes using SVG extremly simple through a modular `Icon` component.

####Icon Component
```javascript
const ICONS = {
	search         : [ <path key="0" d="..."/> ],
	plus           : [ <path key="0" d="..."/> ],
	times          : [ <path key="0" d="..."/> ],
	cart           : [ <path key="0" d="..."/> ],
	dollar         : [ <path key="0" d="..."/> ],
	user           : [ <path key="0" d="..."/> ],
	...
};

export default (props) => (
	<svg {...props}
		viewBox="0 0 1792 1792" 
		xmlns="http://www.w3.org/2000/svg">
		{ ICONS[props.i] }
	</svg>
);
```

This component makes implamenting an icon in React as simple as `<Icon i="plus" />`. With the added benifit of finer grain control over the icon as seen in the S4G logo hover effect on the header bar of every page.


###Donate Tree
Anothe novel use of inline SVG came in the process of making a donation tree which flourished or died depending on how much of a donation was made.

Built out of one inline SVG element with 14 seperate path  that each contained a group of leafs it then uses a range of points plotted on a sigmoid function in order to determine the opacity of each group in turn based that can be raised or lowered with a single value between 0 - 100.

<img src="https://github.com/TJTorola/Save-for-Good/raw/master/docs/readme_imgs/sfg-tree.gif" width="100%" />

####Tree
```javascript
import React from 'react';

const BOOST = 1;
const RANGE = 4;
const STEPS = 14;

const sigmoid = x => 1 / (1 + Math.pow(Math.E, -x))

const opacity = (i, percent = 0) => {
	let start = (-RANGE / 2) + BOOST;
	let x = start - (i * (RANGE / STEPS));
	x += (percent / 100) * RANGE * 2
	return sigmoid(x);
}

const style = (i, percent) => ({
	opacity: opacity(i, percent)
});

export default ({ percent = 50, className }) => (
<svg className={ className } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 443">
	<path d="..."/>
	<path style={ style(0,  percent) } d="..."/>
	<path style={ style(1,  percent) } d="..."/>
	<path style={ style(2,  percent) } d="..."/>
	<path style={ style(3,  percent) } d="..."/>
	<path style={ style(4,  percent) } d="..."/>
	<path style={ style(5,  percent) } d="..."/>
	<path style={ style(6,  percent) } d="..."/>
	<path style={ style(7,  percent) } d="..."/>
	<path style={ style(8,  percent) } d="..."/>
	<path style={ style(9,  percent) } d="..."/>
	<path style={ style(10, percent) } d="..."/>
	<path style={ style(11, percent) } d="..."/>
	<path style={ style(12, percent) } d="..."/>
	<path style={ style(13, percent) } d="..."/>
</svg>
);
```

The end result is a tree that can be rendered from full of life to dead like `<Tree percent={ 50 } />`. All that remained was hooking the tree up to a slider.

##Site Pattern
The site consists of `Users`, whom make many `Payments`, which include many `Contributions`, that each in turn belong to a `Loan`, which itself belongs back again to a `User`.

A user can log into the site and browse all of the `Loan`s on the Entrepreneurs page. They can look at more detail on them in the individual Entrepreneur page. They can then proceed to make a contribution first by setting their contribution amount through a lightbox, then going through the checkout process.

After making a `Contribution` they can view all of their past contributions on their portfolio and see the status of the loans as well as a year long timeline of their repayment and contribution history.
