import {lte, isNil} from 'ramda';
import ternary from './ternary.js';

test('test subject is returned', () => {
	const result = ternary(lte(5), 2, 10);

	expect(result).toBe(10);
});

test('test subject is returned — curried', () => {
	const fn = ternary(lte(5), 2);
	const result = fn(10);

	expect(result).toBe(10);
});

test('test fallback is returned', () => {
	const result = ternary(isNil, 'foo', 'bar');

	expect(result).toBe('foo');
});

test('test fallback is returned — curried', () => {
	const fn = ternary(isNil, 'foo');
	const result = fn('bar');

	expect(result).toBe('foo');
});
