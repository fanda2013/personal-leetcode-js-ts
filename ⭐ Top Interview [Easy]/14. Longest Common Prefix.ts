/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let string = ''

    for (let i = 0; i < strs[0].length; i++) {
        const commonString = strs.every(str => str[i] === strs[0][i])

        if (commonString === true) {
            string += strs[0][i]
        } else {
            break
        }
    }

    return string

};
