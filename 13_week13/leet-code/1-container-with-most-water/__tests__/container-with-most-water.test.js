import { describe, it, expect } from 'vitest';
import { maxArea } from '../index.js';

describe('Container With Most Water', () => {
  it('handles the example cases', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it('works with monotonic arrays', () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6); // indices 0 and 4 → min(1,5)*4 = 4 (but better is 2&5 at 1 and 4 → 2*3=6)
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  it('handles zeros and duplicates', () => {
    expect(maxArea([0, 0, 0, 0])).toBe(0);
    expect(maxArea([5, 5, 5, 5])).toBe(15); // min(5,5) * width(3) = 15
  });
});
