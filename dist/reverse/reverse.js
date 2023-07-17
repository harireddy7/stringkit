"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
/**
 * Reverses the given text
 * @param {string} text text to be reversed
 * @returns {string} reversed text
 * @example
 * reverse('good day')
 * // => yad doog
 * reverse('tomato')
 * // => otamot
 * reverse('madam')
 * // => madam
 */
const reverse = (text) => {
    if (typeof text !== 'string')
        return text;
    return text.split('').reverse().join('');
};
exports.reverse = reverse;
//# sourceMappingURL=reverse.js.map