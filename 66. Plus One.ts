/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let number = BigInt(digits.join(''))
    ++number

    const result = (number + '').split('').map(num => Number.parseInt(num))
    return result
};
