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
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    var traverse = function(root, isLeft){
        if(!root){
            return;
        }
        if(root.left === null && root.right === null && isLeft){
            sum += root.val;
        }
        if(root.left){
            traverse(root.left, true);
        }
        if(root.right){
            traverse(root.right, false);
        }
    }
    traverse(root, false);
    return sum;
};


