/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let nullHead = new ListNode(null)
    let node1 = nullHead
    let node2 = nullHead
    nullHead.next = head

    for (let i = 0; i < n + 1; i++) {
        node1 = node1.next
    }

    while (node1 !== null) {
        node1 = node1.next
        node2 = node2.next
    }

    node2.next = node2.next.next
    return nullHead.next
};
