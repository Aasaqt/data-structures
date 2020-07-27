/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let hash = {};
    for(let i = 0; i < inorder.length; i++){
        hash[inorder[i]] = i;
    }
    return treeTraversal(inorder, postorder, 0 , postorder.length - 1, hash);

};

var treeTraversal = function(inorder, postorder, start, end, hash){
    if(start > end){
        return null;
    }
    
    let curr = postorder.pop();
    let node = new TreeNode(curr);
    if(start == end){
        return node;
    }
    let inIndex = hash[curr];
    node.right = treeTraversal(inorder, postorder, inIndex+1, end, hash);
    node.left = treeTraversal(inorder, postorder, start, inIndex - 1, hash);
    return node;
}