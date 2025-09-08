import { describe, it, expect, beforeEach } from 'vitest';
import { DoublyLinkedList } from '../classes/doubly-linked-list.js';

describe('DoublyLinkedList (core methods only)', () => {
  let list;
  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it('starts empty', () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
    expect(list.removeHead()).toBeNull();
    expect(list.toArray()).toEqual([]);
  });

  it('insertAtHead builds the list from the front', () => {
    list.insertAtHead('b'); // [b]
    list.insertAtHead('a'); // [a, b]
    expect(list.isEmpty()).toBe(false);
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual(['a', 'b']);
  });

  it('multiple insertAtHead calls place newest at the front', () => {
    list.insertAtHead(1);   // [1]
    list.insertAtHead(2);   // [2, 1]
    list.insertAtHead(3);   // [3, 2, 1]
    expect(list.size()).toBe(3);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  it('removeHead removes and returns the front value; becomes empty when last is removed', () => {
    list.insertAtHead(1);   // [1]
    list.insertAtHead(2);   // [2, 1]
    list.insertAtHead(3);   // [3, 2, 1]

    expect(list.removeHead()).toBe(3); // [2, 1]
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual([2, 1]);

    expect(list.removeHead()).toBe(2); // [1]
    expect(list.size()).toBe(1);
    expect(list.toArray()).toEqual([1]);

    expect(list.removeHead()).toBe(1); // []
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
    expect(list.removeHead()).toBeNull(); // stays empty
    expect(list.toArray()).toEqual([]);
  });

  it('toArray returns a snapshot (mutating the returned array does not affect the list)', () => {
    list.insertAtHead('b');
    list.insertAtHead('a');
    const arr = list.toArray();
    expect(arr).toEqual(['a', 'b']);
    // mutate the snapshot
    arr.pop();
    // list should be unchanged
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual(['a', 'b']);
  });
});
