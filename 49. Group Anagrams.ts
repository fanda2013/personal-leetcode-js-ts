/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {}
    for (let str of strs) {
        const value = str.split('').sort().join('')
        !map[value] ? map[value] = [str] : map[value].push(str)
    }
    return Object.values(map)
};
