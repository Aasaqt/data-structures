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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let max = 0;
    let mins = [0];
   var traverse = function(root, level, pos){
        if (!root) return;
        if (level === mins.length) {
            mins[level] = pos;
        }
        const delta = pos-mins[level];
        max = Math.max(max, delta+1);
        traverse(root.left, level+1, delta*2);
        traverse(root.right, level+1, delta*2+1);
    }
    traverse(root, 0, 0);
    return max;
};
