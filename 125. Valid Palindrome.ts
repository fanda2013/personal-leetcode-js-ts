/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const string = s.replace(/[\W_]/g, '')
    const reverse = string.split('').reverse().join('')

    return string.toLowerCase() === reverse.toLowerCase()
};
