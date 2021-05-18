/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const left = []
    let leftMulti = 1

    for (let i = 0; i < nums.length; i++) {
        left[i] = leftMulti
        leftMulti *= nums[i]
    }

    const right = []
    let rightMulti = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        right[i] = rightMulti
        rightMulti *= nums[i]

        right[i] *= left[i]
    }

    return right
};
