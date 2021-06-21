import {
	curry, mapObjIndexed, path, split, pipe, type, equals, cond, T, always,
} from 'ramda';

const handleFunctionValue = data => value => value(data);

const handleStringValue = data => value => path(split('.', value), data);

const typeEq = supplied => pipe(type, equals(supplied));

const resolveValue = data => cond([
	[typeEq('Function'), handleFunctionValue(data)],
	[typeEq('String'), handleStringValue(data)],
	[T, always(undefined)],
]);

const handleNesting = data => cond([
	[typeEq('Object'), mapObjIndexed(resolveValue(data))],
	[T, resolveValue(data)],
]);

const reform = curry((structure, data) => mapObjIndexed(handleNesting(data), structure));

export default reform;
