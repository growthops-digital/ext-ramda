# GrowthOps Ext Ramda

[![codecov](https://codecov.io/gh/growthops-digital/ext-ramda/branch/main/graph/badge.svg?token=QYEO8FK8JA)](https://codecov.io/gh/growthops-digital/ext-ramda)

A collection of useful extensions built around the [Ramda](https://ramdajs.com/) library.

## Functions

### `notEquals(a, b)`

Returns `true` if `a` is not equal to `b` — otherwise returns `false`.

### `notEmpty(a)`

Returns `true` if `a` is not that type's empty value — otherwise returns `false`.

### `notNil(a)`

Returns `true` if `a` is not nil (`null` or `undefined`) — otherwise returns `false`.

### `isPopulated(a)`

Returns `true` if `a` is not nil (`null` or `undefined`) and is not that type's empty value — otherwise returns `false`.

### `collapse(string | [string])`

Takes a string consisting of newlines, tabs, and/or multiple spaces, and returns a single collapsed string with only one space between each "word". This function also accepts an array of strings and will automatically join and format all entries, while ignoring any non-string entries.

**Example 1**
```js
import {collapse} from '@growthops/ext-ramda';

collapse(`
	foo
		bar

	     baz
`);

// Returns: 'foo bar baz'
```

**Example 2**
```js
import {collapse} from '@growthops/ext-ramda';

collapse([
	'foo',
	`
		bar
		baz
	`,
]);

// Returns: 'foo bar baz'
```

### `ternary(test, fallback, subject)`

Returns `subject` if the result of calling `test` with `subject` as its first and only parameter returns `true` — otherwise `fallback` is returned.

**Example**
```js
import {ternary, notEmpty} from '@growthops/ext-ramda';

const defaultToFoo = ternary(notEmpty, 'foo');

defaultToFoo([]); // 'foo'
defaultToFoo(['bar', 'baz']); // ['bar', 'baz']
```

### `reform(structure, data)`

Create a new object matching the provided `structure` where the value for each of the keys is derived from the provided path into `data`. The path can be provided using the dot notation. If a function is passed instead of a path, the result of executing the function with the `data` object supplied as the first and only parameter will be used instead.

**Example 1**
```js
import {reform} from '@growthops/ext-ramda';

const inputData = {
	id: 0,
	url: 'https://example.com/image.jpg',
	meta: {
		publishedAt: '01/01/2021'
	},
	unneeded: 'data'
};

reform({
	id: 'id',
	src: 'url',
	published: 'meta.publishedAt'
}, inputData);

// Returns:
// {
// 	id: 0,
// 	src: 'https://example.com/image.jpg',
// 	published: '01/01/2021'
// }
```

**Example 2**
```js
import {pipe, prop, sum} from 'ramda';
import {reform} from '@growthops/ext-ramda';

const inputData = {
	numbers: [1, 2, 3]
};

reform({
	total: pipe(prop('numbers'), sum)
}, inputData);

// Returns:
// {
// 	total: 6
// }
```
