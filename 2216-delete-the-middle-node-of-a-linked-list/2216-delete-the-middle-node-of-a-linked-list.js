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
var deleteMiddle = function (head) {
    if (!head.next) return null

    let len = 0

    let cur = head
    while (cur) {
        len++
        cur = cur.next
    }
    const mid = Math.floor(len / 2)

    cur = head
    for (let i = 0; i < mid - 1; i++) {
        cur = cur.next
    }
    cur.next = cur.next.next

    return head
};