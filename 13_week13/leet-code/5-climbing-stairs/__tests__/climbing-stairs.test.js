import { describe, it, expect } from 'vitest';
import { climbStairs } from '../index.js';

describe('climbStairs', () => {
  it('handles base cases', () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
  });

  it('computes small n correctly', () => {
    expect(climbStairs(3)).toBe(3); // 1+1+1, 1+2, 2+1
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
  });

  it('computes larger n', () => {
    expect(climbStairs(10)).toBe(89);
  });

  it('handles upper bound n=45', () => {
    expect(climbStairs(45)).toBe(1836311903);
  });
});
