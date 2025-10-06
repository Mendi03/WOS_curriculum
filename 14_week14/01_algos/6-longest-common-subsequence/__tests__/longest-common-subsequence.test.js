import { describe, it, expect } from 'vitest';
import { longestCommonSubsequence } from '../index.js';

describe('longestCommonSubsequence', () => {
  it('matches classic examples', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  it('handles empty strings', () => {
    expect(longestCommonSubsequence('', '')).toBe(0);
    expect(longestCommonSubsequence('abc', '')).toBe(0);
    expect(longestCommonSubsequence('', 'abc')).toBe(0);
  });

  it('works with repeated characters', () => {
    expect(longestCommonSubsequence('aaaa', 'aa')).toBe(2);
    expect(longestCommonSubsequence('axbycz', 'abc')).toBe(3);
  });

  it('case sensitivity and punctuation', () => {
    expect(longestCommonSubsequence('AbC', 'abc')).toBe(1);
    expect(longestCommonSubsequence('a!b?c', '!abc?')).toBe(3);
  });

  it('longer inputs sanity', () => {
    const a = 'dynamicprogramming';
    const b = 'dyprgrmmng';
    // Not asserting exact value; ensure it runs and returns a plausible number
    const res = longestCommonSubsequence(a, b);
    expect(typeof res).toBe('number');
    expect(res).toBeGreaterThanOrEqual(0);
    expect(res).toBeLessThanOrEqual(Math.min(a.length, b.length));
  });
});
