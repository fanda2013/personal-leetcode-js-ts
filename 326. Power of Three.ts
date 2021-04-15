/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let m = 1, base = 3

    while (true) {
        if (m < n) {
            m *= base
        } else if (m > n) {
            return false
        } else {
            return true
        }
    }

};
