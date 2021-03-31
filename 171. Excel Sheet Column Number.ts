/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const arr = columnTitle.split('').reverse()
    let number = 0

    arr.forEach((char, i) => {
        const value = (char.charCodeAt(0) - 64) * Math.pow(26, i)
        number += value
    });

    return number
};

