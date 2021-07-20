import {prop, always} from 'ramda';
import condProp from './cond-prop.js';

test('correct content is returned for matching type', () => {
	const input = {
		type: 'foo',
		content: 'bar',
	};

	const result = condProp('type', always(null), {
		foo: prop('content'),
	})(input);

	expect(result).toStrictEqual('bar');
});

test('fallback is returned when no matching type is found', () => {
	const input = {
		type: 'foo',
		content: 'bar',
	};

	const result = condProp('type', always('baz'), {
		bar: prop('content'),
	})(input);

	expect(result).toStrictEqual('baz');
});
