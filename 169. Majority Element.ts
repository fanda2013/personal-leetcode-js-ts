/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        obj[num] = ++obj[num] || 1
        if (obj[num] > nums.length / 2) return nums[i]
    }
};
