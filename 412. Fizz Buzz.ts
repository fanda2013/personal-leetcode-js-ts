/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const arr = []
    let i = 1

    while (i <= n) {
        let element = i + ''
        if (i % 3 === 0) element = "Fizz"
        if (i % 5 === 0) element = "Buzz"
        if (i % 3 === 0 && i % 5 === 0) element = "FizzBuzz"
        arr.push(element)
        i++
    }

    return arr
};
