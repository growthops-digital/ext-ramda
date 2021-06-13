import notEmpty from './not-empty.js';

test('array with items is not empty', () => {
	const input = [1, 2, 3];
	const result = notEmpty(input);

	expect(result).toBe(true);
});

test('default array returns as empty', () => {
	const input = [];
	const result = notEmpty(input);

	expect(result).toBe(false);
});

test('string containing characters is not empty', () => {
	const input = 'Hello world';
	const result = notEmpty(input);

	expect(result).toBe(true);
});

test('blank string returns as empty', () => {
	const input = '';
	const result = notEmpty(input);

	expect(result).toBe(false);
});
