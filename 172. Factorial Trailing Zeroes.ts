/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let num = 0
    for (let i = 5; i <= n; i *= 5) {
        num += Math.floor(n / i)
    }

    return num
};
