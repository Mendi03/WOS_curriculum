import { describe, it, expect } from 'vitest';
import { romanToInt } from '../index.js';

describe('romanToInt', () => {
  it('handles basic numerals and repeats', () => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('VIII')).toBe(8);
  });

  it('handles subtractive pairs', () => {
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('XL')).toBe(40);
    expect(romanToInt('XC')).toBe(90);
    expect(romanToInt('CD')).toBe(400);
    expect(romanToInt('CM')).toBe(900);
  });

  it('handles composite numbers', () => {
    expect(romanToInt('LVIII')).toBe(58); // L=50, V=5, III=3
    expect(romanToInt('MCMXCIV')).toBe(1994); // M=1000, CM=900, XC=90, IV=4
    expect(romanToInt('MMMCMXCIX')).toBe(3999);
  });

  it('is robust if you normalize lowercase externally', () => {
    expect(romanToInt('ix'.toUpperCase())).toBe(9);
  });
});
