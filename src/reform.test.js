import {pipe, prop, sum} from 'ramda';
import reform from './reform.js';

test('reforms simple object', () => {
	const inputObject = {
		foo: 'bar',
		baz: 'qux',
	};

	const result = reform({
		foo: 'baz',
	}, inputObject);

	expect(result).toEqual({
		foo: 'qux',
	});
});

test('reforms simple object — curried', () => {
	const inputObject = {
		foo: 'bar',
		baz: 'qux',
	};

	const reformObject = reform({
		foo: 'baz',
	});

	const result = reformObject(inputObject);

	expect(result).toEqual({
		foo: 'qux',
	});
});

test('reforms complex object', () => {
	const inputObject = {
		foo: 'bar',
		baz: {
			qux: 'quux',
			corge: 'grault',
		},
	};

	const result = reform({
		foo: 'foo',
		bar: 'baz.corge',
	}, inputObject);

	expect(result).toEqual({
		foo: 'bar',
		bar: 'grault',
	});
});

test('reforms simple object as complex object', () => {
	const inputObject = {
		foo: 'bar',
		baz: 'qux',
	};

	const result = reform({
		foo: {
			bar: 'baz',
		},
	}, inputObject);

	expect(result).toEqual({
		foo: {
			bar: 'qux',
		},
	});
});

test('reforms complex object as complex object', () => {
	const inputObject = {
		foo: 'bar',
		baz: {
			qux: 'quux',
			corge: 'grault',
		},
	};

	const result = reform({
		foo: 'foo',
		bar: {
			baz: 'baz.corge',
		},
	}, inputObject);

	expect(result).toEqual({
		foo: 'bar',
		bar: {
			baz: 'grault',
		},
	});
});

test('reforms simple object — function based', () => {
	const inputObject = {
		foo: [1, 2, 3],
	};

	const result = reform({
		foo: pipe(prop('foo'), sum),
	}, inputObject);

	expect(result).toEqual({
		foo: 6,
	});
});

test('handles bad input', () => {
	const inputObject = {};

	const result = reform({
		foo: 0,
	}, inputObject);

	expect(result).toEqual({
		foo: undefined,
	});
});
