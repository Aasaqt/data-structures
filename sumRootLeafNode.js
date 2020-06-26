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
var sumNumbers = function(root) {
    let array = [];
    
    var traverse = function(root, value){
        if(root == null){
            return;
        }
        if(root.left === null && root.right === null){
            array.push(parseInt(value + root.val));
            return;
        }else{
            traverse(root.left, value + root.val);
            traverse(root.right, value + root.val);
        }
    }
    traverse(root, "");
    let sum = 0
    for(let i = 0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
};