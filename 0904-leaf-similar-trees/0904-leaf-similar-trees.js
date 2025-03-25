/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const seq1 = getLeafSeq(root1)
  const seq2 = getLeafSeq(root2)
  return JSON.stringify(seq1) === JSON.stringify(seq2)

  function getLeafSeq(root) {
    const res = []
    dfs(root)
    return res

    function dfs(node) {
      if (node.left === null && node.right === null) {
        res.push(node.val)
        return
      }

      node.left && dfs(node.left)
      node.right && dfs(node.right)
    }
  }
};

