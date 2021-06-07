import {curry, mapObjIndexed, path, split} from 'ramda';

const resolveValue = data => value => path(split('.', value), data);

const reform = curry((structure, data) => mapObjIndexed(resolveValue(data), structure));

export default reform;
