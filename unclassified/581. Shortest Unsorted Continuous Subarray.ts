/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let start = 0
    let end = 0
    const sortedArray = [...nums].sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (sortedArray[i] !== nums[i]) {
            start = i
            break
        }
    }


    for (let i = nums.length - 1; i > -1; i--) {
        if (sortedArray[i] !== nums[i]) {
            end = i + 1
            break
        }
    }

    return end - start
};
