import { describe, it, expect } from 'vitest';
import {
  reverseString,
  isPalindrome,
  parensValid,
  nextGreaterRight,
} from '../algorithms/index.js';
import * as algos from '../algorithms/index.js';

// NOTE: These tests define the expected behavior for the three stack algorithms.
// Implementations may be done later; until then, these will fail if methods throw.

describe('reverseString', () => {
  it('reverses a typical string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('handles empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('handles single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('reverses strings with spaces and punctuation', () => {
    expect(reverseString('ab cd!')).toBe('!dc ba');
  });
});

describe('isPalindrome', () => {
  it('returns true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('is case-sensitive by default', () => {
    expect(isPalindrome('Racecar')).toBe(false); // exact match only, no normalization
  });

  it('handles empty string and single character as palindromes', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('x')).toBe(true);
  });
});

describe('parensValid', () => {
  it('treats empty string as valid', () => {
    expect(parensValid('')).toBe(true);
  });

  it('validates simple balanced pairs', () => {
    expect(parensValid('()')).toBe(true);
    expect(parensValid('()()')).toBe(true);
    expect(parensValid('(())')).toBe(true);
  });

  it('returns false for extra closing or opening', () => {
    expect(parensValid('())')).toBe(false); // extra closing
    expect(parensValid('(()')).toBe(false); // extra opening
  });

  it('returns false for wrong order', () => {
    expect(parensValid(')(')).toBe(false);
  });

  it('ignores non-parenthesis characters', () => {
    expect(parensValid('a(b)c')).toBe(true);
    expect(parensValid('xyz(1+2)*(3+4))')).toBe(false); // one extra )
    expect(parensValid('function f() { return (1 + (2)); }')).toBe(true);
  });

  it('handles nested and sequential groups mixed', () => {
    expect(parensValid('(a(b)c)(d(e)f)')).toBe(true);
    expect(parensValid('((a)b)(c))(')).toBe(false);
  });
});

describe('nextGreaterRight', () => {
  it('handles a typical mixed array', () => {
    expect(nextGreaterRight([2, 1, 2, 4, 3])).toEqual([4, 2, 4, -1, -1]);
  });

  it('all increasing values → next is the next element', () => {
    expect(nextGreaterRight([1, 2, 3, 4])).toEqual([2, 3, 4, -1]);
  });

  it('all decreasing values → all -1', () => {
    expect(nextGreaterRight([9, 7, 5, 3])).toEqual([-1, -1, -1, -1]);
  });

  it('handles duplicates (strictly greater, equal does not count)', () => {
    expect(nextGreaterRight([2, 2, 2])).toEqual([-1, -1, -1]);
    expect(nextGreaterRight([2, 1, 1, 2])).toEqual([-1, 2, 2, -1]);
  });

  it('handles empty array', () => {
    expect(nextGreaterRight([])).toEqual([]);
  });
});
