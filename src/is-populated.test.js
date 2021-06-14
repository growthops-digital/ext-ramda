import isPopulated from './is-populated.js';

test('array with items is isPopulated', () => {
	const input = [1, 2, 3];
	const result = isPopulated(input);

	expect(result).toBe(true);
});

test('empty array is not isPopulated', () => {
	const input = [];
	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('null is not isPopulated', () => {
	const input = null;
	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('empty string is not isPopulated', () => {
	const input = '';
	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('string containing characters is isPopulated', () => {
	const input = 'foo';
	const result = isPopulated(input);

	expect(result).toBe(true);
});
