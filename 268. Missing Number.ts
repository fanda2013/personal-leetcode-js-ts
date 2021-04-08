/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const arr = new Array(nums.length + 1).fill(-1)

    for (let num of nums) arr[num] = num

    return arr.indexOf(-1)
};
