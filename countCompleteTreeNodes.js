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
var countNodes = function(root) {
    if(root==null)
        return 0;
    let lh=leftHeight(root);
    let rh=rightHeight(root);
    if(lh==rh)
        return (1<<lh)-1;
    return countNodes(root.left)+countNodes(root.right)+1;
};

var leftHeight = function(root){
    let h=0;
    while(root!=null){
        root=root.left;
        h++;
    }
    return h;
}
var rightHeight = function(root){
    let h=0;
    while(root!=null){
        root=root.right;
        h++;
    }
    return h;
}