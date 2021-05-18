/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length < 2) return intervals
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < intervals.length; i++) {
        let prev = intervals[i - 1]
        let cur = intervals[i]

        if (prev[1] >= cur[0]) {
            intervals[i] = [prev[0], Math.max(prev[1], cur[1])]
            intervals.splice(i - 1, 1)
            i--
        }
    }

    return intervals
};
