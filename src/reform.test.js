import reform from './reform.js';

test('reforms simple object', () => {
	const inputObject = {
		foo: 'bar',
		baz: 'qux'
	};

	const reformedObject = reform({
		foo: 'baz'
	}, inputObject);

	expect(reformedObject).toEqual({
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

	expect(reformObject(inputObject)).toEqual({
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

	const reformedObject = reform({
		foo: 'foo',
		bar: 'baz.corge'
	}, inputObject);

	expect(reformedObject).toEqual({
		foo: 'bar',
		bar: 'grault'
	});
});
