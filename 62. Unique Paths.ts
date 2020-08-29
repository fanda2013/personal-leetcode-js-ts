/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const memo = Array(m + 1).fill(0)
    for (let i = 0; i < memo.length; i++) {
        memo[i] = Array(n + 1).fill(-1)
    }

    const go = (m, n, row, col, memo) => {
        if (row === m && col === n) return 1
        if (row > m || col > n) return 0

        if (memo[row][col] === -1) {
            const goRight = go(m, n, row, col + 1, memo)
            const goDonwn = go(m, n, row + 1, col, memo)
            memo[row][col] = goRight + goDonwn
        }

        return memo[row][col]
    }

    return go(m, n, 1, 1, memo)
};
