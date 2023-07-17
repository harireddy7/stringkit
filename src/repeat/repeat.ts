/**
 * Repeats the given text count number of times
 * @param {string} text text to repeat
 * @param {number} count repeat count
 * @returns {string} repeated string or empty string if count is less than 1
 */
const repeat = (text: string, count: number) => {
  if (!count || !text) return '';
  let repeatedString = '';
  for (let i = 1; i <= count; i++) {
    repeatedString += text;
  }
  return repeatedString;
};

export { repeat };
