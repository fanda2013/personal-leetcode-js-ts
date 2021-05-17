/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = []

    if (numRows > 0) result.push([1])
    if (numRows > 1) result.push([1, 1])

    for (let i = 3; i <= numRows; i++) {
        const arr = []

        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i) {
                arr.push(1)
            } else {
                const number = result[i - 2][j - 1] + result[i - 2][j - 2]
                arr.push(number)
            }
        }
        result.push(arr)
    }

    return result
};
