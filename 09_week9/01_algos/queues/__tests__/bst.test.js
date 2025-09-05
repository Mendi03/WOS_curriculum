import { describe, it, expect, beforeEach } from 'vitest';
import { BinarySearchTree } from '../classes/bst.js';

describe('BinarySearchTree.levelOrder (BFS)', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('returns an empty array for an empty tree', () => {
    expect(bst.levelOrder()).toEqual([]);
  });

  it('returns a single value for a single-node tree', () => {
    bst.insert(42);
    expect(bst.levelOrder()).toEqual([42]);
  });

  it('traverses a balanced-ish tree level by level, left to right', () => {
    //        8
    //      /   \
    //     4    10
    //    / \     \
    //   2   6     12
    [8, 4, 10, 2, 6, 12].forEach((v) => bst.insert(v));
    expect(bst.levelOrder()).toEqual([8, 4, 10, 2, 6, 12]);
  });

  it('handles a left-skewed tree', () => {
    [5, 4, 3, 2, 1].forEach((v) => bst.insert(v));
    expect(bst.levelOrder()).toEqual([5, 4, 3, 2, 1]);
  });

  it('handles a right-skewed tree', () => {
    [1, 2, 3, 4, 5].forEach((v) => bst.insert(v));
    expect(bst.levelOrder()).toEqual([1, 2, 3, 4, 5]);
  });

  it('works with missing children (gaps) and preserves level ordering', () => {
    //         5
    //       /   \
    //      3     7
    //     / \     \
    //    2   4     8
    //   /
    //  1
    [5, 3, 7, 2, 4, 8, 1].forEach((v) => bst.insert(v));
    expect(bst.levelOrder()).toEqual([5, 3, 7, 2, 4, 8, 1]);
  });

  it('does not mutate the tree (idempotent calls)', () => {
    [8, 3, 10, 1, 6, 14, 4, 7, 13].forEach((v) => bst.insert(v));
    const first = bst.levelOrder();
    const second = bst.levelOrder();
    expect(second).toEqual(first);
    // Tree integrity checks
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(13)).toBe(true);
    expect(bst.contains(99)).toBe(false);
  });
});
