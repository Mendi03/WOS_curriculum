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
