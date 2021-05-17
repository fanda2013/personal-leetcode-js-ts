/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const arr = new Array(nums.length + 1).fill(-1)

    nums.forEach(num => {
        arr[num] = num
    });

    return arr.indexOf(-1)
}
