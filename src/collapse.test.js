import collapse from './collapse.js';

test('standard multi line string collapses into single line string', () => {
	const input = `
		foo
		bar
		baz
	`;

	const result = collapse(input);

	expect(result).toBe('foo bar baz');
});

test('multi line string containing extra whitespace and tabs collapses into single line string', () => {
	const input = `
		foo
					bar
		baz



					       qux
	`;

	const result = collapse(input);

	expect(result).toBe('foo bar baz qux');
});

test('array of strings are automatically collapsed', () => {
	const input = [
		'foo',
		'bar',
		'baz',
	];

	const result = collapse(input);

	expect(result).toBe('foo bar baz');
});

test('non-string entries in an array are ignored', () => {
	const input = [
		'foo',
		'bar',
		3,
	];

	const result = collapse(input);

	expect(result).toBe('foo bar');
});

test('multi-line strings in an array are collapsed idependently before overall collapse', () => {
	const input = [
		`
			foo
				bar
		`,
		'baz',
	];

	const result = collapse(input);

	expect(result).toBe('foo bar baz');
});

test('non-string entries in an array are ignored — nested array variant', () => {
	const input = [
		[
			'foo',
			'bar',
		],
		'baz',
	];

	const result = collapse(input);

	expect(result).toBe('baz');
});

test('empty array collapses into an empty string', () => {
	const input = [];

	const result = collapse(input);

	expect(result).toBe('');
});

test('non-string or non-array values collapse into an empty string', () => {
	const input = null;

	const result = collapse(input);

	expect(result).toBe('');
});
