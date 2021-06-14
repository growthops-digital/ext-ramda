import notEquals from './not-equals.js';

test('10 does not equal 5', () => {
	const result = notEquals(10, 5);

	expect(result).toBe(true);
});

test('"foo" does not equal "bar"', () => {
	const result = notEquals('foo', 'bar');

	expect(result).toBe(true);
});

test('5 does equal 5', () => {
	const result = notEquals(5, 5);

	expect(result).toBe(false);
});
