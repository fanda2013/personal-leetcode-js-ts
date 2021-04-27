/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let newBoard = []
    board.forEach((arr, i) => {
        newBoard[i] = [...arr]
    });

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const getValue = (x, y) =>
                newBoard[x] !== undefined && newBoard[x][y] !== undefined ?
                    newBoard[x][y] : 0

            const up = getValue(i - 1, j)
            const down = getValue(i + 1, j)
            const left = getValue(i, j - 1)
            const right = getValue(i, j + 1)

            const upLeft = getValue(i - 1, j - 1)
            const upRight = getValue(i - 1, j + 1)
            const downLeft = getValue(i + 1, j - 1)
            const downRight = getValue(i + 1, j + 1)

            const sum = up + down + left + right + upLeft + upRight + downLeft + downRight

            if (newBoard[i][j] === 1) {
                if (sum < 2) board[i][j] = 0
                if (sum > 3) board[i][j] = 0
            } else {
                if (sum === 3) board[i][j] = 1
            }
        }
    }
};
