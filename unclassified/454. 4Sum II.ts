/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let count = 0
    let obj = {}

    nums1.forEach(i => {
        nums2.forEach(j => {
            obj[i + j] = ++obj[i + j] || 1
        });
    });

    nums3.forEach(k => {
        nums4.forEach(l => {
            obj[-(k + l)] ? count += obj[-(k + l)] : null
        });
    });

    return count
};
