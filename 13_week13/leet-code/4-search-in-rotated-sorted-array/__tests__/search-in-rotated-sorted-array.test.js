import { describe, it, expect } from 'vitest';
import { searchInRotatedSortedArray } from '../index.js';

describe('searchInRotatedSortedArray', () => {
  it('finds targets in a typical rotated array', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    expect(searchInRotatedSortedArray(nums, 0)).toBe(4);
    expect(searchInRotatedSortedArray(nums, 4)).toBe(0);
    expect(searchInRotatedSortedArray(nums, 7)).toBe(3);
  });

  it('returns -1 when target does not exist', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    expect(searchInRotatedSortedArray(nums, 3)).toBe(-1);
    expect(searchInRotatedSortedArray(nums, 8)).toBe(-1);
  });

  it('works when array is not rotated (purely sorted)', () => {
    const nums = [0, 1, 2, 4, 5, 6, 7];
    expect(searchInRotatedSortedArray(nums, 0)).toBe(0);
    expect(searchInRotatedSortedArray(nums, 7)).toBe(6);
    expect(searchInRotatedSortedArray(nums, 3)).toBe(-1);
  });

  it('handles small edge cases', () => {
    expect(searchInRotatedSortedArray([], 1)).toBe(-1);
    expect(searchInRotatedSortedArray([1], 1)).toBe(0);
    expect(searchInRotatedSortedArray([1], -1)).toBe(-1);

    // two elements, rotated
    expect(searchInRotatedSortedArray([3, 1], 1)).toBe(1);
    expect(searchInRotatedSortedArray([3, 1], 3)).toBe(0);
    expect(searchInRotatedSortedArray([3, 1], 2)).toBe(-1);
  });
});
