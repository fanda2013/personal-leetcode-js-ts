/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let low = 0, high = x

    while (low < high) {
        const mid = Math.floor((low + high) / 2)

        if (mid * mid === x) {
            return mid
        } else if (mid * mid < x) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return x < high * high ? high - 1 : high
};
