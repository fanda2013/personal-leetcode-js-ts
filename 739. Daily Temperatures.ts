/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let res = Array(T.length).fill(0)
    let stack = []

    for (let i = 0; i < T.length; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            let temp = stack.pop()
            res[temp] = i - temp
        }
        stack.push(i)
    }

    return res
}
