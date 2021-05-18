/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = ++obj[nums[i]] || 1

        if (obj[nums[i]] === 2) return nums[i]
    }
};
