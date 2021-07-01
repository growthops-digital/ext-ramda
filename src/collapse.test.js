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

test('awful multi line string collapses into single line string', () => {
	const input = `
		foo
					bar
		baz



					     qux
	`;

	const result = collapse(input);

	expect(result).toBe('foo bar baz qux');
});

