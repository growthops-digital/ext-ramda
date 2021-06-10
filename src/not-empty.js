import {complement, isEmpty} from 'ramda';

const notEmpty = complement(isEmpty);

export default notEmpty;
