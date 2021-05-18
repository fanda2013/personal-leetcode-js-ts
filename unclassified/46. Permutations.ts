/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []

    if (nums.length === 0) return []

    const go = (unit, rest) => {
        if (rest.length === 0) {
            res.push(unit)
            return
        }

        for (let i = 0; i < rest.length; i++) {
            go([...unit, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)])
        }
    }

    go([], nums)

    return res
};
