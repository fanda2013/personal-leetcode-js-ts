/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = []
    let level = 0

    const pushValue = (value, level) => {
        res[level] = res[level] ? [...res[level], value] : [value]
    }

    const preOrderTraverse = (root, level) => {
        if (root) {
            pushValue(root.val, level)
            level++
            preOrderTraverse(root.left, level)
            preOrderTraverse(root.right, level)
        }
    }

    preOrderTraverse(root, level)

    return res
};
