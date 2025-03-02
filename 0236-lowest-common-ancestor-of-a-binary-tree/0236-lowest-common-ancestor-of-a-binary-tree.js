/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const route1 = findNode(root, p)
  const route2 = findNode(root, q)

  for (let i = 0; i < Math.min(route1.length, route2.length); i++) {
    if (route1[i + 1]?.val != route2[i + 1]?.val) return route1[i]
  }

  function findNode(root, target) {
    const route = []
    let result
    dfs(root)

    function dfs(node) {
      route.push(node)
      if (node == null) return
      if (target.val == node.val) return result = route.slice()

      dfs(node.left)
      route.pop()
      dfs(node.right)
      route.pop()
    }

    return result
  }
};