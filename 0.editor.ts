/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const arr = nums.map((_, i) => i + 1)

    for (let num of nums) arr[num - 1] = null

    return arr.filter(num => num !== null)
};
