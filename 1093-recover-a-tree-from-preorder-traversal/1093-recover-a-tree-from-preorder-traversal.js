/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
    const data = preprocess(traversal)
    console.log(data)

    let current = new TreeNode(data[0].val)
    const head = current
    const node_stack = [{ current: head, depth: 0 }]

    for (const node of data.slice(1)) {
        const { val, depth } = node
        const prev_depth = node_stack.at(-1).depth
 
        if (depth > prev_depth) {
            current.left = new TreeNode(val)
            current = current.left
            node_stack.push({ current, depth })
        } else if (depth == prev_depth) {
            node_stack.pop()
            current = node_stack.at(-1).current
            current.right = new TreeNode(val)
            current = current.right
            node_stack.push({ current, depth })
        } else {
            for (let i = 0; i <= prev_depth - depth; i++) {
                node_stack.pop()
            }
            current = node_stack.at(-1).current
            current.right = new TreeNode(val)
            current = current.right
            node_stack.push({ current, depth })
        }
    }

    return head
};

function preprocess(str) {
    const data = []
    let depth = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char !== '-') {
            let node = ''
            while (!isNaN(str[i])) {
                node += str[i]
                i++
            }
            i--
            data.push({ val: +node, depth })
            depth = 0
        } else depth++
    }
    return data
}