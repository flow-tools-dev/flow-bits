// DEBUG
export { trace } from './debug/trace';
export { traceWithCxt } from './debug/traceWithCxt';

// IS
export { isArray } from './is/isArray';
export { isBool } from './is/isBool';
export { isError } from './is/isError';
export { isFunction } from './is/isFunction';
export { isNull } from './is/isNull';
export { isNullOrUnd } from './is/isNullOrUnd';
export { isNumber } from './is/isNumber';
export { isObject } from './is/isObject';
export { isPromise } from './is/isPromise';
export { isString } from './is/isString';
export { isUndefined } from './is/isUndefined';

// ITERATORS
export { compose } from './iterators/compose';
export { composeWithCxt } from './iterators/composeWithCxt';
export { filter } from './iterators/filter';
export { filterTruthy } from './iterators/filterTruthy';
export { flatMap } from './iterators/flatMap';
export { map } from './iterators/map';
export { pipe } from './iterators/pipe';
export { pipeWithCxt } from './iterators/pipeWithCxt';

// LOCATORS'
export { head } from './locators/head';
export { identity } from './locators/identity';
export { prop } from './locators/prop';
export { tail } from './locators/tail';

// MISC
export { dedupeArray } from './misc/dedupeArray';
export { jsonClone } from './misc/jsonClone';
export { deferToMacroQueue } from './misc/deferToMacroQueue';
export { deferToMicroQueue } from './misc/deferToMicroQueue';
export { doNothing } from './misc/doNothing';
export { rethrow } from './misc/rethrow';
export { safeParse } from './misc/safeParse';
export { sleep } from './misc/sleep';

// TO
export { toArray } from './to/toArray';
export { toString } from './to/toString';
