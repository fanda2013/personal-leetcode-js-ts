/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const heightLeft = height[left]
        const heightRight = height[right]

        const h = Math.min(heightLeft, heightRight)
        const w = right - left
        const area = h * w

        maxArea = Math.max(area, maxArea)

        heightLeft < heightRight ? left++ : right--
    }

    return maxArea
};
