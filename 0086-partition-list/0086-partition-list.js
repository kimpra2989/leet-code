/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let lower
  let lowerHead
  let greater
  let greaterHead
  while (head) {
    if (head.val < x) {
      if (!lower) lowerHead = lower = new ListNode(head.val)
      else {
        lower.next = new ListNode(head.val)
        lower = lower.next
      }
    } else {
      if (!greater) greaterHead = greater = new ListNode(head.val)
      else {
        greater.next = new ListNode(head.val)
        greater = greater.next
      }
    }
    head = head.next
  }

  if (lowerHead && greaterHead) {
    lower.next = greaterHead
    return lowerHead
  }
  
  return (lowerHead || greaterHead) ?? null
};