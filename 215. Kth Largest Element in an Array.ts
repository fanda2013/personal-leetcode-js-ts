/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const sortArr = nums.sort((a, b) => b - a)
    return sortArr[k - 1]
};
