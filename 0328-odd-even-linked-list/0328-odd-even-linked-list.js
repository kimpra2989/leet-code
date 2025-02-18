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
var oddEvenList = function (head) {
    if (!head) return head

    const oddFirst = head
    const evenFirst = head?.next

    let cur = oddFirst
    let next = evenFirst
    let isOdd = true
    while (cur) {
        next = cur?.next
        cur.next = cur?.next?.next ?? null

        if (isOdd && !cur.next) cur.next = evenFirst

        cur = next
        isOdd = !isOdd
    }

    return oddFirst
};