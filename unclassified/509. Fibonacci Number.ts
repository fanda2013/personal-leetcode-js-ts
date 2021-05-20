/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let obj = []
    obj[0] = 0
    obj[1] = 1
    for(let i = 2; i <= n; i++){
        obj[i] = obj[i - 1] + obj[i - 2]
    }
    
    return obj[n]

};
