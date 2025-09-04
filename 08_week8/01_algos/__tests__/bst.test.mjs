import { describe, it, expect, beforeEach } from '@jest/globals';
import { BinarySearchTree } from '../bst.mjs';
import { seed } from '../index.mjs';

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    seed.forEach((v) => bst.insert(v));
  });

  it('inserts and contains values', () => {
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(2)).toBe(false);
    bst.insert(2);
    expect(bst.contains(2)).toBe(true);
  });
});
