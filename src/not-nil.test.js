import notNil from './not-nil.js';

test('10 is not null', () => {
	const result = notNil(10);

	expect(result).toBe(true);
});

test('null is nil', () => {
	const result = notNil(null);

	expect(result).toBe(false);
});

test('undefined is nil', () => {
	const result = notNil(undefined);

	expect(result).toBe(false);
});
