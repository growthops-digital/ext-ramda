import populated from './populated.js';

test('array with items is populated', () => {
	const input = [1, 2, 3];
	const result = populated(input);

	expect(result).toBe(true);
});

test('empty array is not populated', () => {
	const input = [];
	const result = populated(input);

	expect(result).toBe(false);
});

test('null is not populated', () => {
	const input = null;
	const result = populated(input);

	expect(result).toBe(false);
});

test('empty string is not populated', () => {
	const input = '';
	const result = populated(input);

	expect(result).toBe(false);
});

test('string containing characters is populated', () => {
	const input = 'foo';
	const result = populated(input);

	expect(result).toBe(true);
});
