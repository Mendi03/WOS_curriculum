import { describe, it, expect } from 'vitest';
import { groupAnagrams } from '../index.js';

function normalize(groups) {
  // sort each group, then sort groups by their joined string
  return groups
    .map((g) => [...g].sort())
    .sort((a, b) => a.join('').localeCompare(b.join('')));
}

describe('groupAnagrams', () => {
  it('groups the example case', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const out = groupAnagrams(input);
    expect(normalize(out)).toEqual(
      normalize([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
    );
  });

  it('handles empty strings and singletons', () => {
    const input = ['', '', 'a', 'b'];
    const out = groupAnagrams(input);
    expect(normalize(out)).toEqual(normalize([['', ''], ['a'], ['b']]));
  });

  it('is case-sensitive unless specified otherwise', () => {
    const input = ['ab', 'BA', 'ba', 'Ab']; // "ab" and "ba" are anagrams; "BA" (caps) is separate
    const out = groupAnagrams(input);
    expect(normalize(out)).toEqual(normalize([['ab', 'ba'], ['BA'], ['Ab']]));
  });

  it('handles duplicates within the same group', () => {
    const input = ['aaa', 'aaa', 'aa', 'aa', 'a'];
    const out = groupAnagrams(input);
    expect(normalize(out)).toEqual(
      normalize([['aaa', 'aaa'], ['aa', 'aa'], ['a']])
    );
  });
});
