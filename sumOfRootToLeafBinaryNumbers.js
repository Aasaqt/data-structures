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
var sumRootToLeaf = function(root) {
    let array = [];
    var traverse= function(root, path){
        if(!root){
            return;
        }
        path += root.val;
        if(!root.left && !root.right){
            array.push(path);
        }
        if(root.left){
            traverse(root.left, path);
        }
        if(root.right){
            traverse(root.right, path);
        }
    }
    traverse(root, '');
    let result = 0;
    for(let i =0 ; i< array.length; i++){
        result += parseInt(array[i], 2);
    }
    return result;
    
};
