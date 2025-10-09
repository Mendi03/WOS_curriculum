import { describe, it, expect } from 'vitest';
import { isHappy, isHappyFloyd } from '../index.js';

// Known happy numbers (small set)
const HAPPY = [
  1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100,
];
// Some known unhappy numbers
const UNHAPPY = [2, 3, 4, 5, 6, 8, 9, 12, 20, 21, 22, 24, 25, 26, 27];

describe('Happy Number — set-based implementation (isHappy)', () => {
  it('accepts known happy numbers', () => {
    for (const n of HAPPY) {
      expect(isHappy(n)).toBe(true);
    }
  });

  it('rejects known unhappy numbers', () => {
    for (const n of UNHAPPY) {
      expect(isHappy(n)).toBe(false);
    }
  });
});

describe("Happy Number — Floyd's cycle detection (isHappyFloyd)", () => {
  it('accepts known happy numbers', () => {
    for (const n of HAPPY) {
      expect(isHappyFloyd(n)).toBe(true);
    }
  });

  it('rejects known unhappy numbers', () => {
    for (const n of UNHAPPY) {
      expect(isHappyFloyd(n)).toBe(false);
    }
  });
});

describe('Both implementations agree on a range', () => {
  it('matches for 1..200', () => {
    for (let n = 1; n <= 200; n++) {
      expect(isHappy(n)).toBe(isHappyFloyd(n));
    }
  });
});
