import { describe, it, expect } from 'vitest';
import { intToRoman } from '../index.js';

// Lightweight helper to validate round-trip correctness inside tests only
const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
function romanToIntLocal(s) {
  let total = 0,
    prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = ROMAN[s[i]];
    if (curr < prev) total -= curr;
    else {
      total += curr;
      prev = curr;
    }
  }
  return total;
}

describe('intToRoman — examples from handout', () => {
  it('converts 3749 → MMMDCCXLIX', () => {
    expect(intToRoman(3749)).toBe('MMMDCCXLIX');
  });

  it('converts 58 → LVIII', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });

  it('converts 1994 → MCMXCIV', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
});

describe('intToRoman — basic and subtractive cases', () => {
  it('handles smallest and largest typical values', () => {
    expect(intToRoman(1)).toBe('I');
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
  });

  it('handles canonical subtractive pairs', () => {
    expect(intToRoman(4)).toBe('IV');
    expect(intToRoman(9)).toBe('IX');
    expect(intToRoman(40)).toBe('XL');
    expect(intToRoman(90)).toBe('XC');
    expect(intToRoman(400)).toBe('CD');
    expect(intToRoman(900)).toBe('CM');
  });

  it('handles some mid-range composites', () => {
    expect(intToRoman(944)).toBe('CMXLIV');
    expect(intToRoman(2421)).toBe('MMCDXXI');
    expect(intToRoman(3888)).toBe('MMMDCCCLXXXVIII');
  });
});

describe('intToRoman — sanity and round-trip checks', () => {
  it('produces only valid roman characters', () => {
    const out = intToRoman(2751);
    expect(/^[IVXLCDM]+$/.test(out)).toBe(true);
  });

  it('round-trips for a sampling of values (1..3999 step 137)', () => {
    for (let n = 1; n <= 3999; n += 137) {
      const roman = intToRoman(n);
      expect(romanToIntLocal(roman)).toBe(n);
    }
  });
});
