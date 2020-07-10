/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) return head;
    var checkChild = function(node){
        if(!node.next && !node.child) return node;
        
        if(node.child) {
            console.log(node);
            const nextNode = node.next;
            node.next = node.child;
            node.next.prev = node;
            node.child = null;
            
            if(nextNode) {
                const tailNode = checkChild(node.next);
                tailNode.next = nextNode;
                nextNode.prev = tailNode;
            }
        }
        return checkChild(node.next);
    }
    checkChild(head);
    return head;
};