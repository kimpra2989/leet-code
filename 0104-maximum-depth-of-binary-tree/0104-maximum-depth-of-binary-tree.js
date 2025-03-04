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
var maxDepth = function (root) {
  let result = 0

  function dfs(depth, node) {
    if (!node) return

    if (depth > result) result = depth

    dfs(depth + 1, node.left)
    dfs(depth + 1, node.right)
  }

  dfs(1, root)
  return result
};