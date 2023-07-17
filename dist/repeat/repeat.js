"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
/**
 * Repeats the given text count number of times
 * @param {string} text text to repeat
 * @param {number} count repeat count
 * @returns {string} repeated string or empty string if count is less than 1
 * @example
 * repeat('*', 5) // *****
 * repeat('cool', 3) // coolcoolcool
 * repeat('hey', 0) // ''
 */
const repeat = (text, count) => {
    if (!count || !text)
        return '';
    let repeatedString = '';
    for (let i = 1; i <= count; i++) {
        repeatedString += text;
    }
    return repeatedString;
};
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map