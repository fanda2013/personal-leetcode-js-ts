/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [[]]

    for (let i = 0; i < nums.length; i++) {
        res.forEach(arr => {
            res.push([...arr, nums[i]])
        })
    }

    return res
};
