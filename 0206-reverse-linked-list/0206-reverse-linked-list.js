/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head

    let cur = head
    let before = null
    let next

    do {
        next = cur.next
        cur.next = before
        before = cur
        cur = next
    } while (cur)

    return before
};