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
var levelOrderBottom = function(root) {
    let result = [];
    var traverse = function(node, level){
        node.left && traverse(node.left, level + 1);
        node.right && traverse(node.right, level + 1);
        result[level] && result[level].push(node.val) || ( result[level] = [node.val] );
    }
    root && traverse(root, 0);
    return result.reverse();
    
};

