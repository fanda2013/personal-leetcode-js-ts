/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {}
    let cursor = 0

    return s.split('').reduce((max, v, i) => {
        cursor = map[v] >= cursor ? map[v] + 1 : cursor
        map[v] = i
        return Math.max(max, i - cursor + 1)
    }, 0)
};
