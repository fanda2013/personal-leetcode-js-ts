/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    return matrix.flatMap(x => x).sort((a, b) => a - b)[k - 1]
};
