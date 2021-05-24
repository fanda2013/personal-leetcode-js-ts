/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let num = s.match(/^ *[+\-]?\d+.*$/) ? +s.match(/-?\d+/)[0] : 0;
    if (num > 2 ** 31 - 1 || num < -1 * 2 ** 31) num = num > 0 ? 2 ** 31 - 1 : -1 * 2 ** 31;
    return num;
};
