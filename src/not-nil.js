import {complement, isNil} from 'ramda';

const notNil = complement(isNil);

export default notNil;
