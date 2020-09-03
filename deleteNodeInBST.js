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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root){
        return root;
    }
    
    if(key === root.val){
        if(!root.left && !root.right){
            return null;
        }
        if(!root.right){
            return root.left;
        }
        const successor = findSuccessor(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
        return root;
    }
    if(key < root.val){
        root.left = deleteNode(root.left, key);
    }
    if(key > root.val){
        root.right = deleteNode(root.right, key);
    }
    return root;
};

var findSuccessor = function(root){
    while(root.left){
        root = root.left;
    }
    return root;
}
