/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const obj = {}

    const check = (idxS, idxP) => {
        const objIdex = idxS + ":" + idxP

        if (obj[objIdex]) return obj[objIdex]
        if (idxS > s.length) return false;
        if (idxS === s.length && idxP === p.length) return true;

        if (p[idxP] === '.' || p[idxP] === s[idxS]) {
            obj[objIdex] = p[idxP + 1] === '*' ?
                check(idxS + 1, idxP) || check(idxS, idxP + 2) :
                check(idxS + 1, idxP + 1);
        } else {
            obj[objIdex] = p[idxP + 1] === '*' ?
                check(idxS, idxP + 2) : false;
        }
        return obj[objIdex];
    }

    return check(0, 0);
};
