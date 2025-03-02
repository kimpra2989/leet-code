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
var maxLevelSum = function (root) {
  const q = new Q()
  q.push(root)

  let max = -10e5
  let result = 1
  let depth = 1
  while (q.size > 0) {
    let sum = 0
    const levelSize = q.size

    for (let i = 0; i < levelSize; i++) {
      const node = q.pop()
      sum += node.val
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    if (sum > max) {
      max = sum
      result = depth
    }
    depth++
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