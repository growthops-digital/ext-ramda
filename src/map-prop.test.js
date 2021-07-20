import {prop, always} from 'ramda';
import mapProp from './map-prop.js';

test('correct content is returned for matching type', () => {
	const input = [{
		type: 'foo',
		content: 'bar',
	}];

	const result = mapProp('type', always(null), {
		foo: prop('content'),
	})(input);

	expect(result).toStrictEqual(['bar']);
});

test('fallback is returned when no matching type is found', () => {
	const input = [{
		type: 'foo',
		content: 'bar',
	}];

	const result = mapProp('type', always('baz'), {
		bar: prop('content'),
	})(input);

	expect(result).toStrictEqual(['baz']);
});

test('correct content is returned for all matching types', () => {
	const input = [
		{
			type: 'foo',
			contentFoo: 'bar',
		},
		{
			type: 'baz',
			contentBaz: 'qux',
		},
	];

	const result = mapProp('type', always(null), {
		foo: prop('contentFoo'),
		baz: prop('contentBaz'),
	})(input);

	expect(result).toStrictEqual(['bar', 'qux']);
});
