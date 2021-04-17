/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let arr = new Array(n).fill(true);

    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr.filter(val => val).length
};
