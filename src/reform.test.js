import reform from './reform.js';

test('reforms simple object', () => {
	const inputObject = {
		foo: 'bar',
		baz: 'qux'
	};

	const result = reform({
		foo: 'baz'
	}, inputObject);

	expect(result).toEqual({
		foo: 'qux'
	});
});

test('reforms simple object — curried', () => {
	const inputObject = {
		foo: 'bar',
		baz: 'qux'
	};

	const reformObject = reform({
		foo: 'baz'
	});

	const result = reformObject(inputObject);

	expect(result).toEqual({
		foo: 'qux'
	});
});

test('reforms complex object', () => {
	const inputObject = {
		foo: 'bar',
		baz: {
			qux: 'quux',
			corge: 'grault'
		}
	};

	const result = reform({
		foo: 'foo',
		bar: 'baz.corge'
	}, inputObject);

	expect(result).toEqual({
		foo: 'bar',
		bar: 'grault'
	});
});
