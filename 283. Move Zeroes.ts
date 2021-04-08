/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let swap = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] === 0) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                swap = true
            }
        }

        if (swap === false) break
    }
};
