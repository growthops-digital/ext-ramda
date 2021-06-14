import {both} from 'ramda';
import notNil from './not-nil.js';
import notEmpty from './not-empty.js';

const populated = both(notNil, notEmpty);

export default populated;
