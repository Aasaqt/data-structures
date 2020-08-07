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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    let array = treeTraversal(root, 0, 0, []);
    array.sort((a, b) => a[1] - b[1] || b[2] - a[2] || a[0] - b[0]);
    const map = new Map();
    
    for (const [val,x, y] of array) {
        if (!map.has(x)) map.set(x, []);
        map.get(x).push(val);
    }
    
    return [...map.values()];
};

var treeTraversal = function(root, x,y, hash){
    if(!root){
        return;
    }
    hash.push([root.val, x,y]);
    if(root.left){
        treeTraversal(root.left, x - 1, y -1, hash);
    }
    if(root.right){
        treeTraversal(root.right, x+1, y -1, hash);
    }
    return hash;
}