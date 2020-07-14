/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null || q === null) {
        if (p === q) {
            return true;
        } else {
            return false;
        }
    }

    if (p.val !== q.val) {
        return false;
    }

    let pArray = [];
    pArray = treeOrderTraversal(p, pArray);
    let qArray = [];
    qArray = treeOrderTraversal(q, qArray);
    if(pArray.length !== qArray.length) { return false;}
    
    for (var i = 0; i < pArray.length; i++) {
        if (pArray[i] !== qArray[i]) return false;
    }
    return true;
};

var treeOrderTraversal = function(root, array){
    if(root === null){
        return;
    }
    if(root.left !== null){treeOrderTraversal( root.left,array);}else{array.push(-1);}
    array.push(root.val);
    if(root.right !== null){treeOrderTraversal(root.right, array);}
    return array;
}
