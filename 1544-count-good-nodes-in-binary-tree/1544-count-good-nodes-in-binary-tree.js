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
 * @return {number}
 */
var goodNodes = function (root) {
    let count = 0

    function dfs(node, history) {
        if (node.val >= Math.max(...history)) count++

        const newHistory = [...history, node.val]
        node.left && dfs(node.left, newHistory)
        node.right && dfs(node.right, newHistory)
    }

    dfs(root, [])
    return count
};