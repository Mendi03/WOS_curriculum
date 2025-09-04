import { describe, it, expect } from 'vitest';
import { hotPotato } from '../algorithms/hot-potato.js';

describe('hotPotato', () => {
  it('returns the only player if there is one', () => {
    expect(hotPotato(['Solo'], 3)).toBe('Solo');
  });

  it('works on a small, deterministic example', () => {
    const players = ['A', 'B', 'C'];
    // With our definition (rotate k times, then eliminate front), k=2 ⇒ winner is 'B'
    expect(hotPotato(players, 2)).toBe('B');
    // Ensure input array is not mutated
    expect(players).toEqual(['A', 'B', 'C']);
  });

  it('handles k larger than the number of players', () => {
    expect(hotPotato(['a', 'b', 'c'], 10)).toBe('a');
  });

  it('uses the correct elimination order semantics (rotate k, eliminate front)', () => {
    // For two players, k=1 ⇒ after one pass, eliminate front ⇒ winner is 'A'
    expect(hotPotato(['A', 'B'], 1)).toBe('A');
    // For two players, k=2 ⇒ after two passes, eliminate front ⇒ winner is 'B'
    expect(hotPotato(['A', 'B'], 2)).toBe('B');
  });

  it("works with Ciso's 15 students", () => {
    const students = [
      'Andres',
      'Beril',
      'Bryan',
      'Daniel',
      'Janice',
      'Janis',
      'Jason',
      'Jenna',
      'Lance',
      'Luis',
      'Orlando',
      'Sampson',
      'Salvador',
      'Tamara',
      'Ursula',
    ];
    // Using k=4 under the rotate-k-then-eliminate rule ⇒ winner is 'Andres'
    expect(hotPotato(students, 4)).toBe('Andres');
  });
});
