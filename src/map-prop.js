import {
	pipe, map, propEq, toPairs, append, T, cond, curry,
} from 'ramda';

const createPredicateTransformerPair = prop => ([value, transformer]) => [propEq(prop, value), transformer];

const mapProp = curry((prop, fallback, branches, data) => pipe(
	toPairs,
	map(createPredicateTransformerPair(prop)),
	append([T, fallback]),
	cond,
	map,
)(branches)(data));

export default mapProp;
