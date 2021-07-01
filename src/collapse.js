import {pipe, replace, trim} from 'ramda';

const collapse = pipe(
	replace(/[\r\n\t]+/g, ' '),
	replace(/  +/g, ' '),
	trim,
);

export default collapse;
