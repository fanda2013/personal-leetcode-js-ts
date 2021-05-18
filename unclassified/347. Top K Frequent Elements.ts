/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = ++obj[nums[i]] || 1
    }

    let arr = Object.entries(obj).sort((([key1, val1], [key2, val2]) => val2 - val1))

    const res = []
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0])
    }

    return res
};
