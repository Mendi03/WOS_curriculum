import { SinglyLinkedList } from './singly-linked-lists.mjs';

/**
 * Build an SLL from `str`, reverse it, return the reversed string.
 * Rules: Do not use arrays or built-in string reverse helpers.
 */
function reverseStringUsingSLL(str) {
  // your code here
  // use insertAtBack to create the list
  // reverse the list
  // turn list into a string
  // return the string
}

/* ====== Quick Tests ====== */
console.log(reverseStringUsingSLL('racecar')); // "racecar"
console.log(reverseStringUsingSLL('Nixie')); // "eixiN"
console.log(reverseStringUsingSLL('')); // ""
console.log(reverseStringUsingSLL('abcde')); // "edcba"
