import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from '../index.js';

describe('lengthOfLongestSubstring', () => {
  it('handles examples from the prompt', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('handles edge cases', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
    expect(lengthOfLongestSubstring(' ')).toBe(1);
    expect(lengthOfLongestSubstring('abba')).toBe(2); // 'ab' or 'ba'
    expect(lengthOfLongestSubstring('dvdf')).toBe(3); // 'vdf'
  });

  it('works with mixed characters and punctuation', () => {
    expect(lengthOfLongestSubstring('a!a@b#c$')).toBe(7);
  });

  it('large input performance sanity', () => {
    const n = 10000;
    const s = 'a'.repeat(n) + 'b';
    expect(lengthOfLongestSubstring(s)).toBe(2);
  });
});
