/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var list = new ListNode();
    var head1 = list;
    while(head != null){
        if(head.val != val){
            list.next = new ListNode(head.val); 
            list = list.next;
        }
        head = head.next;
    }
    return head1.next;
};