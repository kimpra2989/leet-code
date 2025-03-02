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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []

  const q = new Q()
  q.push([root, 0])

  const result = []
  while (q.size > 0) {
    const [node, depth] = q.pop()
    if (result[depth] === undefined) result.push(node.val)

    node.right && q.push([node.right, depth + 1])
    node.left && q.push([node.left, depth + 1])    
  }

  return result
};

class Q {
  constructor() {
    this.s = {}
    this.head = this.tail = 0
  }

  pop() {
    const val = this.s[this.head]
    delete this.s[this.head++]
    return val
  }

  push(val) {
    this.s[this.tail++] = val
  }

  get size() {
    return this.tail - this.head
  }
}