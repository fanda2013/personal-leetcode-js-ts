/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []

    const go = (l, r, s) => {
        if (l > r) return

        if (l > 0) go(l - 1, r, s + "(")
        if (r > 0) go(l, r - 1, s + ")")

        if (l === 0 && r === 0) {
            res.push(s)
        }
    }

    go(n, n, '')
    return res
};
