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
 */
var FindElements = function (root) {
    const values = new Set()
    function dfs(node, val) {
        if (node === null) return

        values.add(val)
        dfs(node.left, 2 * val + 1)
        dfs(node.right, 2 * val + 2)
    }

    dfs(root, 0)

    this.values = values
    this.node = root
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.values.has(target)
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */