# GrowthOps Ext Ramda

A collection of useful extensions built around the [Ramda](https://ramdajs.com/) library.

## Methods

### `notEquals(a, b)`

Returns `true` if `a` is not equal to `b`, `false` otherwise.

### `reform(structure, data)`

Create a new object matching the provided `structure` where the value for each of the keys is derived from the provided path into `data`. The path is provided using the dot notation. Note: the path only supports nested objects.

**Example**
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
