import {
	pipe, replace, trim, type, cond,
	T, always, equals, filter, join,
} from 'ramda';

const formatString = pipe(
	replace(/[\r\n\t]+/g, ' '),
	replace(/  +/g, ' '),
	trim,
);

const isType = expectedType => pipe(type, equals(expectedType));

const cleanArray = filter(isType('String'));

const formatArray = pipe(
	cleanArray,
	join(' '),
	formatString,
);

const collapse = cond([
	[isType('String'), formatString],
	[isType('Array'), formatArray],
	[T, always('')],
]);

export default collapse;
