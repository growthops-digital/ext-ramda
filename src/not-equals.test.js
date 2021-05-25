import notEquals from './not-equals.js';

test('10 does not equal 5', () => {
	expect(notEquals(10, 5)).toBe(true);
});

test('"foo" does not equal "bar"', () => {
	expect(notEquals('foo', 'bar')).toBe(true);
});

test('5 does equal 5', () => {
	expect(notEquals(5, 5)).toBe(false);
});
