/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let res = []

    const go = (t, p, i) => {
        if (t === 0) {
            res.push(p)
            return
        }
        if (t > 0) {
            while (i < candidates.length && t - candidates[i] >= 0) {
                go(t - candidates[i], [...p, candidates[i]], i)
                i++
            }
        }
    }

    go(target, [], 0)

    return res
};
