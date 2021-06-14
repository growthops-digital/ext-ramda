import {curry} from 'ramda';

const ternary = curry(
	(test, fallback, subject) => test(subject) ?
		subject :
		fallback
);

export default ternary;
