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
const reverse = (text: string): string => {
  if (typeof text !== 'string') return text;

  return text.split('').reverse().join('');
};

export { reverse };
