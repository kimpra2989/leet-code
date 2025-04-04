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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  // find deepest node
  const leaves = getDeepest()

  // find LCA
  for (let i = leaves[0].length - 1; i >= 0; i--) {
    let anc = leaves[0][i].val
    let isLCA = true
    for (const leaf of leaves) {
      if (anc != leaf[i].val) {
        isLCA = false
        break
      }
    }
    if (isLCA) return leaves[0][i]
  }

  function getDeepest() {
    let res = []
    let maxDepth = 0
    const q = new Q()
    q.push({ node: root, depth: 0, path: [] })

    while (q.length) {
      const { node, depth, path } = q.pop()
      path.push(node)
      if (depth > maxDepth) {
        maxDepth = depth
        res = []
      }
      res.push(path)

      if (node.left) {
        q.push({ node: node.left, depth: depth + 1, path: [...path] })
      }
      if (node.right) {
        q.push({ node: node.right, depth: depth + 1, path: [...path] })
      }
    }

    return res
  }
};

class Q {
  constructor() {
    this.q = []
    this.head = this.tail = 0
  }

  push(val) {
    this.q[this.tail++] = val
  }

  pop() {
    const val = this.q[this.head]
    delete this.q[this.head]
    this.head++
    return val
  }

  get length() {
    return this.tail - this.head
  }
}