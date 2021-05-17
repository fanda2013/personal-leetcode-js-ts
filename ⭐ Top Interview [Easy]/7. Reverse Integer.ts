/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const reversed = (Math.abs(x) + "").split('').reverse().join('')
    const num = parseInt(reversed, 10)
    if (num > 2 ** 31 - 1) return 0

    return num * Math.sign(x)
};
