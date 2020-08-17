/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    let result = []
    if (digits.length === 0) return result

    const getResult = (i, s) => {
        if (i === digits.length) {
            result.push(s)
            return
        }

        for (let c of map[digits[i]]) {
            getResult(i + 1, s + c)
        }
    }

    getResult(0, '')
    return result
};
