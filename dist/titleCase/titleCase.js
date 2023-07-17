"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = void 0;
/**
 * Transforms the text to titleCase and trims the ends without whitespace
 * @param {string} text text to be transformed to title case
 * @returns {string} title case text
 * @example
 * titleCase('lord of the rings')
 * // => Lord Of The Rings
 * titleCase('have a good day')
 * // => Have A Good Day
 * titleCase('  haRRy poRTeR   ')
 * // => Harry Porter
 */
const titleCase = (text) => {
    if (typeof text !== 'string')
        return text;
    const splitArr = text.split(' ');
    const revisedText = splitArr.reduce((sentence, word) => {
        if (!word)
            return sentence + ' ';
        const firstLetter = word[0].toLocaleUpperCase();
        let revisedWord = firstLetter;
        if (word.length > 1) {
            revisedWord += word.substring(1).toLocaleLowerCase();
        }
        return sentence + revisedWord + ' ';
    }, '');
    return revisedText.trim();
};
exports.titleCase = titleCase;
//# sourceMappingURL=titleCase.js.map