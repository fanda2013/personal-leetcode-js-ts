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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const res = []

    const inOrderTraverse = root => {
        if (root) {
            inOrderTraverse(root.left)
            res.push(root.val)
            inOrderTraverse(root.right)
        }
    }

    inOrderTraverse(root)

    return res[k - 1]
};
