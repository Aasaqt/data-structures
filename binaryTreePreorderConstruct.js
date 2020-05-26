/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length ===0) {
    return null;
  }
  // when preorder >= 1
  var node = new TreeNode( preorder[0] );
  if(preorder.length > 1) {
    var index = 1;
    while(index<preorder.length) {
      if(preorder[index] > node.val) {
        break;
      }
      index++;
    }
    var lPreorder = preorder.slice(1,index);
    var rPreorder = preorder.slice(index);
    node.left = bstFromPreorder(lPreorder);
    node.right = bstFromPreorder(rPreorder);
  }
  return node;
};
