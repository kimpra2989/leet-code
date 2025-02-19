/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let before
    let head
    let node1 = l1
    let node2 = l2

    let up = 0
    do {
        const node = new ListNode()
        if (!head) head = node
        if (before) before.next = node

        const d1 = node1 ? node1?.val : 0
        const d2 = node2 ? node2?.val : 0
        const d = d1 + d2 + up
        node.val = d % 10

        up = d >= 10 ? 1 : 0

        node1 = node1?.next
        node2 = node2?.next
        before = node
    } while (node1 || node2)

    before.next = up === 1 ? new ListNode(1, null) : null
    
    return head
};