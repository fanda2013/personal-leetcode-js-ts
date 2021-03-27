/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const elements = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        elements[num] = elements[num] + 1 || 1

        if (elements[num] > nums.length / 2) return nums[i]
    }
};
