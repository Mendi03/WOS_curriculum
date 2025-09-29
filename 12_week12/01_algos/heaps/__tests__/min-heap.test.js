import { describe, it, expect, beforeEach } from 'vitest';
import { MinHeap } from '../min-heap.js';

describe('MinHeap — Day 1 (constructor, insert, peek)', () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  it('starts empty', () => {
    expect(Array.isArray(heap.data)).toBe(true);
    expect(heap.data).toEqual([null]);
    expect(heap.peek()).toBeUndefined();
  });

  it('peek returns the minimum without removing it', () => {
    heap.insert(10);
    heap.insert(4);
    heap.insert(7);
    expect(heap.peek()).toBe(4);
    // ensure not removed
    expect(heap.data.length).toBe(4);
    expect(heap.peek()).toBe(4);
  });

  it('maintains the min-heap property while inserting (deterministic sequence)', () => {
    // Insert and verify the internal array after each step.
    heap.insert(50);
    expect(heap.data).toEqual([null, 50]);

    heap.insert(30);
    expect(heap.data).toEqual([null, 30, 50]);

    heap.insert(20);
    expect(heap.data).toEqual([null, 20, 50, 30]);

    heap.insert(15);
    expect(heap.data).toEqual([null, 15, 20, 30, 50]);

    heap.insert(10);
    expect(heap.data).toEqual([null, 10, 15, 30, 50, 20]);

    expect(heap.peek()).toBe(10);
  });

  it('handles duplicates correctly', () => {
    heap.insert(5);
    heap.insert(5);
    heap.insert(5);
    expect(heap.peek()).toBe(5);
    expect(heap.data.length).toBe(4);
    // Any valid heap arrangement with all 5s is fine; spot-check structure is stable
    expect(heap.data).toEqual([null, 5, 5, 5]);
  });

  it('peek is always the minimum of inserted values', () => {
    const values = [12, 3, 17, 8, 25, 1, 9];
    for (const v of values) heap.insert(v);
    expect(heap.peek()).toBe(Math.min(...values));
  });
});

describe('MinHeap — Day 2 (extractMin, heapify)', () => {
  it('extractMin returns undefined on an empty heap', () => {
    const heap = new MinHeap();
    expect(heap.extractMin()).toBeUndefined();
  });

  it('extractMin returns the only element on a single-item heap', () => {
    const heap = new MinHeap();
    heap.insert(42);
    expect(heap.extractMin()).toBe(42);
    expect(heap.peek()).toBeUndefined();
    expect(heap.data).toEqual([null]);
  });

  it('extractMin repeatedly returns values in non-decreasing order', () => {
    const heap = new MinHeap();
    const input = [5, 3, 8, 1, 4, 7, 2, 6];
    input.forEach((v) => heap.insert(v));

    const out = [];
    let x;
    while ((x = heap.extractMin()) !== undefined) {
      out.push(x);
    }
    expect(out).toEqual([...input].sort((a, b) => a - b));
    expect(heap.data).toEqual([null]);
  });

  it('heapify builds a valid min-heap equivalent to inserting all elements', () => {
    const arr = [50, 30, 20, 15, 10, 40, 60, 5];

    const byInsert = new MinHeap();
    arr.forEach((v) => byInsert.insert(v));

    const byHeapify = new MinHeap();
    byHeapify.heapify(arr);

    // Extract all to compare sorted order; both should yield same sequence
    const a = [],
      b = [];
    let v;
    while ((v = byInsert.extractMin()) !== undefined) a.push(v);
    while ((v = byHeapify.extractMin()) !== undefined) b.push(v);
    expect(a).toEqual(b);
  });

  it('heapify maintains the heap property (parent <= children) at every node', () => {
    const heap = new MinHeap();
    heap.heapify([9, 4, 7, 1, -3, 2, 6, 5, 8]);

    const n = heap.data.length - 1;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
      const left = 2 * i;
      const right = left + 1;
      if (left <= n) expect(heap.data[i] <= heap.data[left]).toBe(true);
      if (right <= n) expect(heap.data[i] <= heap.data[right]).toBe(true);
    }
  });

  it('extractMin works correctly after heapify', () => {
    const heap = new MinHeap();
    heap.heapify([3, 1, 4, 1, 5, 9, 2]);
    expect(heap.extractMin()).toBe(1);
    expect(heap.extractMin()).toBe(1);
    expect(heap.extractMin()).toBe(2);
    expect(heap.peek()).toBe(3);
  });
});