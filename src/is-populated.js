import {both} from 'ramda';
import notNil from './not-nil.js';
import notEmpty from './not-empty.js';

const isPopulated = both(notNil, notEmpty);

export default isPopulated;
