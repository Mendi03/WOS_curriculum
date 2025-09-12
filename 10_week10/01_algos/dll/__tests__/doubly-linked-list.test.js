import { describe, it, expect, beforeEach } from 'vitest';
import { DoublyLinkedList } from '../classes/doubly-linked-list.js';

describe('DoublyLinkedList', () => {
  let list;
  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it('starts empty', () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
    expect(list.removeHead()).toBeNull();
    expect(list.removeTail()).toBeNull();
    expect(list.find('x')).toBeNull();
    expect(list.toArray()).toEqual([]);
  });

  it('insertAtHead adds to the front and updates links', () => {
    list.insertAtHead('b');
    list.insertAtHead('a');

    expect(list.isEmpty()).toBe(false);
    expect(list.size()).toBe(2);
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('b');

    // Link integrity
    expect(list.head.prev).toBeNull();
    expect(list.head.next.value).toBe('b');
    expect(list.tail.prev.value).toBe('a');
    expect(list.tail.next).toBeNull();

    expect(list.toArray()).toEqual(['a', 'b']);
  });

  it('insertAtTail adds to the back and updates links', () => {
    list.insertAtTail('a');
    list.insertAtTail('b');
    list.insertAtTail('c');

    expect(list.size()).toBe(3);
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('c');

    expect(list.head.prev).toBeNull();
    expect(list.head.next.value).toBe('b');
    expect(list.tail.prev.value).toBe('b');
    expect(list.tail.next).toBeNull();

    expect(list.toArray()).toEqual(['a', 'b', 'c']);
  });

  it('removeHead removes from the front and returns value', () => {
    list.insertAtTail(1);
    list.insertAtTail(2);

    expect(list.removeHead()).toBe(1);
    expect(list.size()).toBe(1);
    expect(list.head.value).toBe(2);
    expect(list.head.prev).toBeNull();
    expect(list.tail.value).toBe(2);

    expect(list.removeHead()).toBe(2); // now empty
    expect(list.isEmpty()).toBe(true);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.removeHead()).toBeNull();
  });

  it('removeTail removes from the back and returns value', () => {
    list.insertAtHead(1);
    list.insertAtHead(2);

    expect(list.removeTail()).toBe(1);
    expect(list.size()).toBe(1);
    expect(list.tail.value).toBe(2);
    expect(list.tail.next).toBeNull();
    expect(list.head.value).toBe(2);

    expect(list.removeTail()).toBe(2); // now empty
    expect(list.isEmpty()).toBe(true);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.removeTail()).toBeNull();
  });

  it('find returns the first matching node or null', () => {
    list.insertAtTail('x');
    list.insertAtTail('y');
    list.insertAtTail('z');

    const y = list.find('y');
    expect(y && y.value).toBe('y');
    expect(list.find('nope')).toBeNull();
  });

  it('supports mixed operations while maintaining integrity', () => {
    list.insertAtTail('b'); // [b]
    list.insertAtHead('a'); // [a, b]
    list.insertAtTail('c'); // [a, b, c]
    list.insertAtHead('start'); // [start, a, b, c]

    expect(list.toArray()).toEqual(['start', 'a', 'b', 'c']);

    expect(list.removeHead()).toBe('start'); // [a, b, c]
    expect(list.removeTail()).toBe('c'); // [a, b]

    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('b');
    expect(list.head.prev).toBeNull();
    expect(list.head.next.value).toBe('b');
    expect(list.tail.prev.value).toBe('a');
    expect(list.tail.next).toBeNull();

    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual(['a', 'b']);
  });

  // New tests for insertBefore, insertAfter, remove(val), reverse()

  describe('insertBefore', () => {
    it('inserts before the head node', () => {
      list.insertAtTail('b');
      list.insertAtTail('c');
      list.insertBefore(list.head, 'a');

      expect(list.head.value).toBe('a');
      expect(list.head.next.value).toBe('b');
      expect(list.size()).toBe(3);
      expect(list.toArray()).toEqual(['a', 'b', 'c']);
    });

    it('inserts before a middle node', () => {
      list.insertAtTail('a');
      list.insertAtTail('c');
      list.insertAtTail('d');
      list.insertBefore(list.find('c'), 'b');

      expect(list.size()).toBe(4);
      expect(list.toArray()).toEqual(['a', 'b', 'c', 'd']);
      const bNode = list.find('b');
      expect(bNode.prev.value).toBe('a');
      expect(bNode.next.value).toBe('c');
    });
  });

  describe('insertAfter', () => {
    it('inserts after the tail node', () => {
      list.insertAtTail('a');
      list.insertAtTail('b');
      list.insertAfter(list.tail, 'c');

      expect(list.tail.value).toBe('c');
      expect(list.tail.prev.value).toBe('b');
      expect(list.size()).toBe(3);
      expect(list.toArray()).toEqual(['a', 'b', 'c']);
    });

    it('inserts after a middle node', () => {
      list.insertAtTail('a');
      list.insertAtTail('b');
      list.insertAtTail('d');
      list.insertAfter(list.find('b'), 'c');

      expect(list.size()).toBe(4);
      expect(list.toArray()).toEqual(['a', 'b', 'c', 'd']);
      const bNode = list.find('b');
      expect(bNode.prev.value).toBe('a');
      expect(bNode.next.value).toBe('c');
    });
  });

  describe('remove(val)', () => {
    it('removes the head node', () => {
      list.insertAtTail('a');
      list.insertAtTail('b');
      list.insertAtTail('c');

      expect(list.remove('a')).toBe(true);
      expect(list.head.value).toBe('b');
      expect(list.head.prev).toBeNull();
      expect(list.size()).toBe(2);
      expect(list.toArray()).toEqual(['b', 'c']);
    });

    it('removes the tail node', () => {
      list.insertAtTail('a');
      list.insertAtTail('b');
      list.insertAtTail('c');

      expect(list.remove('c')).toBe(true);
      expect(list.tail.value).toBe('b');
      expect(list.tail.next).toBeNull();
      expect(list.size()).toBe(2);
      expect(list.toArray()).toEqual(['a', 'b']);
    });

    it('removes a middle node', () => {
      list.insertAtTail('a');
      list.insertAtTail('b');
      list.insertAtTail('c');

      expect(list.remove('b')).toBe(true);
      expect(list.size()).toBe(2);
      expect(list.toArray()).toEqual(['a', 'c']);
      expect(list.head.next.value).toBe('c');
      expect(list.tail.prev.value).toBe('a');
    });

    it('returns false when removing non-existent value', () => {
      list.insertAtTail('a');
      list.insertAtTail('b');

      expect(list.remove('x')).toBe(false);
      expect(list.size()).toBe(2);
      expect(list.toArray()).toEqual(['a', 'b']);
    });

    it('removes the only node in the list', () => {
      list.insertAtTail('a');

      expect(list.remove('a')).toBe(true);
      expect(list.isEmpty()).toBe(true);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.toArray()).toEqual([]);
    });
  });

  describe('reverse', () => {
    it('reverses an empty list', () => {
      list.reverse();
      expect(list.isEmpty()).toBe(true);
      expect(list.toArray()).toEqual([]);
    });

    it('reverses a single-node list', () => {
      list.insertAtTail('a');
      list.reverse();
      expect(list.size()).toBe(1);
      expect(list.head.value).toBe('a');
      expect(list.tail.value).toBe('a');
      expect(list.head.prev).toBeNull();
      expect(list.head.next).toBeNull();
      expect(list.toArray()).toEqual(['a']);
    });

    it('reverses a multi-node list and maintains integrity', () => {
      list.insertAtTail('a');
      list.insertAtTail('b');
      list.insertAtTail('c');
      list.insertAtTail('d');

      list.reverse();

      expect(list.toArray()).toEqual(['d', 'c', 'b', 'a']);
      expect(list.head.value).toBe('d');
      expect(list.tail.value).toBe('a');

      // Check links integrity
      expect(list.head.prev).toBeNull();
      expect(list.head.next.value).toBe('c');

      expect(list.tail.next).toBeNull();
      expect(list.tail.prev.value).toBe('b');

      // Check middle links
      const c = list.head.next;
      expect(c.prev.value).toBe('d');
      expect(c.next.value).toBe('b');

      const b = c.next;
      expect(b.prev.value).toBe('c');
      expect(b.next.value).toBe('a');
    });
  });
});