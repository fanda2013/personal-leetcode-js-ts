/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    const seen = {}

    const getSum = n => {
        const arr = (n + '').split('').map(string => Number.parseInt(string))
        const sum = arr.reduce((accum, curr) => accum + Math.pow(curr, 2), 0)
        return sum
    }

    while (n !== 1 && !seen[n]) {
        seen[n] = true
        n = getSum(n)
    }

    return n === 1
};
