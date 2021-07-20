import {map, pipe} from 'ramda';
import condProp from './cond-prop.js';

const mapProp = pipe(condProp, map);

export default mapProp;
