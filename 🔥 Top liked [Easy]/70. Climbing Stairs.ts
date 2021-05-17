/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const res = {}

    const go = n => {
        if (n <= 3) return n

        if (res[n] === undefined) res[n] = go(n - 1) + go(n - 2)

        return res[n]
    }

    return go(n)
};
