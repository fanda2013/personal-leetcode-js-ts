/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null

    const index = inorder.indexOf(preorder[0])
    const inorder_leftArr = inorder.slice(0, index)
    const inorder_rightArr = inorder.slice(index + 1)

    const preorder_leftArr = preorder.slice(1, index + 1)
    const preorder_rightArr = preorder.slice(index + 1)

    const left = buildTree(preorder_leftArr, inorder_leftArr)
    const right = buildTree(preorder_rightArr, inorder_rightArr)

    return { val: preorder[0], left, right }
};
