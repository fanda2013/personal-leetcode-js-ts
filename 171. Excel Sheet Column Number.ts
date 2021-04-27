/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const arr = columnTitle.split("").reverse()
    let num = 0

    arr.forEach((char, i) => {
        const value = (char.charCodeAt(0) - 64) * (26 ** i)
        num += value
    });

    return num
};
