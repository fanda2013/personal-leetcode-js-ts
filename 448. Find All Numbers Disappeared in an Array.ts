/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const fullArr = nums.map((_, i) => i + 1);

    for (let c of nums) {
        fullArr[c - 1] = null;
    }

    return fullArr.filter(e => e !== null);
};
