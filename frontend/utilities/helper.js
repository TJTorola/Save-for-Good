import React from 'react';
import { browserHistory } from 'react-router';

export const go = path => () => browserHistory.push(path);

export const toCurrency = amount => {
	return `$ ${(amount/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
};

export const nlToP = block => {
	block = block.replace(/\n{2}/g, '&nbsp;</p><p>');
	return block.replace(/\n/g, '&nbsp;<br />');
};

export const imgUrl = loan => `//res.cloudinary.com/tjcloud/image/upload/w_300,h_300,c_fill/e${loan.id}.jpeg`;

const iconsJsx = {
	s4g: [
		<path key="0" d="M146.5 962.3L348.5 973.7C348.5 973.7 528.4 1099.2 623.5 1165 718.5 1230.8 771.7 1260.2 829.2 1275.1 886.8 1290 1223.2 1189.7 1344.9 1150.2 1466.6 1110.7 1743.6 1013.8 1743.6 1013.8 1743.6 1013.8 1713.9 934.1 1656.3 915.7 1598.6 897.2 1090.7 937.5 1090.7 937.5 1090.7 937.5 1040.7 1024.4 1001.1 1037.3 961.5 1050.1 879.3 1019.3 827.1 996.6 774.9 973.9 688.7 938.3 670.7 922.6 652.7 906.8 646.7 881.3 646.7 881.3 646.7 881.3 647.1 868.8 661 875.2 674.8 881.6 904.5 995 970.1 995.8 1035.7 996.5 1038.1 918.2 1038.1 918.2 1038.1 918.2 811.4 697.4 706.2 651.9 601 606.4 528.6 592.3 443.1 609.8 357.5 627.4 80.3 667.7 56.6 685.6 32.9 703.6 120 937.3 120 937.3L146.5 962.3Z"/>,
		<path key="1" d="M1326.4 885.1C1334 866.6 1339.7 847 1343.3 826.6 1370.7 671.5 1267.1 523.7 1112.1 496.4 977.8 472.7 849 547.2 799.1 668.3L799.3 668.2C799.3 668.2 1029.7 849.8 1067.6 903.7 1067.6 903.7 1282.5 885.7 1326.4 885.1Z"/>
	],
	search: [
		<path key="0" d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/>
	],
	plus: [
		<path key="0" d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/>
	],
	times: [
		<path key="0" d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/>
	],
};

export const Icon = ({ i }) => (
	<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		{ iconsJsx[i] }
	</svg>
);