/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {

        let row = new Set();
        let col = new Set();
        let block = new Set();

        for (let j = 0; j < 9; j++) {
            let rowNum = board[i][j]
            let colNum = board[j][i]
            let blockNum = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]

            if (row.has(rowNum)) return false;
            if (rowNum !== ".") row.add(rowNum);

            if (col.has(colNum)) return false;
            if (colNum !== ".") col.add(colNum);

            if (block.has(blockNum)) return false;
            if (blockNum !== ".") block.add(blockNum);
        }
    }

    return true;
};
