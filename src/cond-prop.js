import {
	pipe, map, propEq, toPairs, append, T, cond, curry,
} from 'ramda';

const createPredicateTransformerPair = prop => ([value, transformer]) => [propEq(value, prop), transformer];

const condProp = curry((prop, fallback, branches) => pipe(
	toPairs,
	map(createPredicateTransformerPair(prop)),
	append([T, fallback]),
	cond,
)(branches));

export default condProp;
