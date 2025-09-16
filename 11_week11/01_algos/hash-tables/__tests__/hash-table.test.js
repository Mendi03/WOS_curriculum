import { describe, it, expect } from 'vitest';
import { HashTable } from '../hash-table.js';
import { charFrequency } from '../algorithms.js';

describe('HashTable — Day 1 (constructor, #hash, set)', () => {
  describe('constructor', () => {
    it('initializes with default size 16 and independent bucket arrays', () => {
      const ht = new HashTable();
      // expect buckets array to exist and have length 16
      expect(Array.isArray(ht.buckets)).toBe(true);
      expect(ht.buckets.length).toBe(16);
      // each bucket should be an independent array
      expect(Array.isArray(ht.buckets[0])).toBe(true);
      expect(Array.isArray(ht.buckets[1])).toBe(true);
      expect(ht.buckets[0]).not.toBe(ht.buckets[1]);
      // size property should reflect capacity
      expect(ht.size).toBe(16);
    });

    it('respects a custom size', () => {
      const ht = new HashTable(4);
      expect(ht.buckets.length).toBe(4);
      expect(ht.size).toBe(4);
      // all buckets are arrays
      for (const bucket of ht.buckets) {
        expect(Array.isArray(bucket)).toBe(true);
      }
    });
  });

  describe('set', () => {
    it('inserts new [key, value] pairs into the correct bucket (collision-friendly)', () => {
      // Force collisions by using size=1 so every key hashes to index 0
      const ht = new HashTable(1);
      const ret1 = ht.set('a', 1);
      const ret2 = ht.set('b', 2);
      // set should return undefined (void)
      expect(ret1).toBeUndefined();
      expect(ret2).toBeUndefined();

      // Bucket 0 should contain both entries
      const bucket = ht.buckets[0];
      expect(bucket.length).toBe(2);
      // Order should be insertion order under a simple push-based set
      expect(bucket).toEqual([
        ['a', 1],
        ['b', 2],
      ]);
    });

    it('updates the value if the key already exists without duplicating the entry', () => {
      const ht = new HashTable(1); // single bucket for determinism
      ht.set('x', 10);
      ht.set('x', 99); // update
      const bucket = ht.buckets[0];
      expect(bucket.length).toBe(1); // no duplicate
      expect(bucket[0]).toEqual(['x', 99]);
    });

    it('distributes entries across multiple buckets (indirectly testing #hash)', () => {
      const ht = new HashTable(4);
      ht.set('alpha', 1);
      ht.set('beta', 2);
      ht.set('gamma', 3);
      ht.set('delta', 4);
      // Check total count across all buckets equals number of inserts
      const total = ht.buckets.reduce((sum, b) => sum + b.length, 0);
      expect(total).toBe(4);
      // Each bucket should contain only [key, value] pairs
      for (const b of ht.buckets) {
        for (const entry of b) {
          expect(Array.isArray(entry)).toBe(true);
          expect(entry.length).toBe(2);
          expect(typeof entry[0]).toBe('string');
        }
      }
    });
  });
});

describe('HashTable - Day 2 (get, has, charFrequency', () => {
  describe('get', () => {
    it('returns undefined for missing keys', () => {
      const ht = new HashTable();
      expect(ht.get('nope')).toBeUndefined();
    });

    it('retrieves values for existing keys', () => {
      const ht = new HashTable(4);
      ht.set('a', 1);
      ht.set('b', 2);
      expect(ht.get('a')).toBe(1);
      expect(ht.get('b')).toBe(2);
    });

    it('works correctly under collisions (same bucket)', () => {
      const ht = new HashTable(1); // everything into bucket 0
      ht.set('x', 10);
      ht.set('y', 20);
      ht.set('z', 30);
      expect(ht.get('x')).toBe(10);
      expect(ht.get('y')).toBe(20);
      expect(ht.get('z')).toBe(30);
    });

    it('reflects updates made by set on an existing key', () => {
      const ht = new HashTable(2);
      ht.set('k', 1);
      expect(ht.get('k')).toBe(1);
      ht.set('k', 99);
      expect(ht.get('k')).toBe(99);
    });
  });

  describe('has', () => {
    it('returns false for keys that do not exist and true once set', () => {
      const ht = new HashTable(4);
      expect(ht.has('missing')).toBe(false);
      ht.set('missing', 42);
      expect(ht.has('missing')).toBe(true);
    });

    it('handles collisions without false positives', () => {
      const ht = new HashTable(1);
      ht.set('a', 1);
      ht.set('b', 2);
      expect(ht.has('a')).toBe(true);
      expect(ht.has('b')).toBe(true);
      expect(ht.has('c')).toBe(false);
    });
  });

  describe('charFrequency (Day 2 algo using HashTable)', () => {
    it('counts letters case-insensitively and ignores whitespace by default', () => {
      const res = charFrequency('A a  Bb\tB  c');
      expect(res).toEqual({ a: 2, b: 3, c: 1 });
    });

    it('handles punctuation and numbers', () => {
      const res = charFrequency('ab!! 123');
      // default options: lowercased, whitespace ignored
      expect(res).toEqual({ a: 1, b: 1, '!': 2, 1: 1, 2: 1, 3: 1 });
    });
  });
});