/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const obj = {}
    for (let i of nums) {
        obj[i] ? delete obj[i] : obj[i] = true
    }

    return Object.keys(obj)[0]
};
