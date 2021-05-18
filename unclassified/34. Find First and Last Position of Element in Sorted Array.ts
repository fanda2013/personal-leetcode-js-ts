/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    let center

    while (start <= end) {
        center = Math.floor((start + end) / 2)
        if (nums[center] === target) {
            start = center
            end = center
            break
        }
        else if (nums[center] < target) start = center + 1
        else end = center - 1
    }

    if (start > end) return [-1, - 1]

    while (nums[start - 1] === target) start--
    while (nums[end + 1] === target) end++

    return [start, end]
};
