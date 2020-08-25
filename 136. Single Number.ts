/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let hash = {}
    for (let item of nums) {
        hash[item] ? delete hash[item] : hash[item] = true
    }

    return Object.keys(hash)[0]
};
