/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];
    const parts = [];

    const isPalindrome = str => str === str.split('').reverse().join('');

    const findPalindrome = start => {
        if (start === s.length) {
            result.push([...parts])
            return;
        }

        for (let i = start + 1; i <= s.length; i++) {
            const target = s.substring(start, i);

            if (isPalindrome(target)) {
                parts.push(target);
                findPalindrome(i);
                parts.pop();
            }
        }
    }

    findPalindrome(0);

    return result;
};
