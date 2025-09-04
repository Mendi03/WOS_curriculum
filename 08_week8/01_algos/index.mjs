import { BinarySearchTree } from './bst.mjs';

export const seed = [8, 3, 10, 1, 6, 14, 4, 7, 13, 8];

const bst = new BinarySearchTree();
seed.forEach((v) => bst.insert(v));

// bst.prettyPrint();

// console.log(bst.contains(1));
// console.log(bst.contains(-1));
// console.log(bst.contains(8));
// console.log(bst.contains(13));

// console.log(bst.max());
// console.log(bst.min());
// console.log(bst.inOrder());
// console.log(bst.preOrder());
// console.log(bst.postOrder());

bst.remove(1);
bst.remove(10);
// bst.remove(6);
bst.prettyPrint();

console.log(bst.isBalanced());



