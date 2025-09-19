import { describe, it, expect } from 'vitest';
import { HashTable } from '../hash-table.js';

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
});

describe('HashTable — Day 3 (remove, keys, values)', () => {
  describe('remove', () => {
    it('returns false when key is not present', () => {
      const ht = new HashTable();
      expect(ht.remove('nope')).toBe(false);
    });

    it('removes an existing key from a non-colliding bucket', () => {
      const ht = new HashTable(8);
      ht.set('alpha', 1);
      ht.set('beta', 2);
      expect(ht.has('alpha')).toBe(true);
      expect(ht.remove('alpha')).toBe(true);
      expect(ht.has('alpha')).toBe(false);
      expect(ht.get('alpha')).toBeUndefined();
    });

    it('removes keys correctly under collisions (head, middle, tail in bucket)', () => {
      const ht = new HashTable(1); // everything collides into bucket 0
      ht.set('x', 10); // head in bucket array
      ht.set('y', 20); // middle
      ht.set('z', 30); // tail

      // remove middle
      expect(ht.remove('y')).toBe(true);
      expect(ht.has('y')).toBe(false);
      expect(ht.has('x')).toBe(true);
      expect(ht.has('z')).toBe(true);

      // remove head (now 'x')
      expect(ht.remove('x')).toBe(true);
      expect(ht.has('x')).toBe(false);
      expect(ht.has('z')).toBe(true);

      // remove tail (now only 'z')
      expect(ht.remove('z')).toBe(true);
      expect(ht.has('z')).toBe(false);

      // nothing left
      expect(ht.remove('anything')).toBe(false);
    });
  });

  describe('keys', () => {
    it('returns an empty array when table is empty', () => {
      const ht = new HashTable();
      expect(ht.keys()).toEqual([]);
    });

    it('returns all keys regardless of bucket distribution (order not guaranteed)', () => {
      const ht = new HashTable(4);
      ht.set('alpha', 1);
      ht.set('beta', 2);
      ht.set('gamma', 3);
      ht.set('delta', 4);
      const got = ht.keys().slice().sort();
      const expected = ['alpha', 'beta', 'delta', 'gamma'].sort();
      expect(got).toEqual(expected);
    });
  });

  describe('values', () => {
    it('returns an empty array when table is empty', () => {
      const ht = new HashTable();
      expect(ht.values()).toEqual([]);
    });

    it('returns all values (order not guaranteed)', () => {
      const ht = new HashTable(4);
      ht.set('a', 10);
      ht.set('b', 20);
      ht.set('c', 30);
      const got = ht
        .values()
        .slice()
        .sort((m, n) => (m > n ? 1 : m < n ? -1 : 0));
      const expected = [10, 20, 30];
      expect(got).toEqual(expected);
    });

    it('allows duplicate values if different keys share the same value', () => {
      const ht = new HashTable(2);
      ht.set('k1', 1);
      ht.set('k2', 1);
      const vs = ht
        .values()
        .slice()
        .sort((a, b) => a - b);
      expect(vs).toEqual([1, 1]);
    });
  });
});

describe('HashTable — Day 4 (entries)', () => {
  it('returns an empty array when table is empty', () => {
    const ht = new HashTable();
    expect(ht.entries()).toEqual([]);
  });

  it('returns all [key, value] pairs (order not guaranteed across buckets)', () => {
    const ht = new HashTable(4);
    ht.set('alpha', 1);
    ht.set('beta', 2);
    ht.set('gamma', 3);
    ht.set('delta', 4);

    const got = ht
      .entries()
      .slice()
      .sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));

    const expected = [
      ['alpha', 1],
      ['beta', 2],
      ['delta', 4],
      ['gamma', 3],
    ].sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));

    expect(got).toEqual(expected);
  });

  it('reflects updates (no duplicate key pairs after set on existing key)', () => {
    const ht = new HashTable(2);
    ht.set('k', 1);
    ht.set('k', 99); // update same key

    const entries = ht.entries();
    expect(entries.length).toBe(1);
    expect(entries[0][0]).toBe('k');
    expect(entries[0][1]).toBe(99);
  });

  it('works correctly under collisions (single bucket)', () => {
    const ht = new HashTable(1);
    ht.set('x', 10);
    ht.set('y', 20);
    ht.set('z', 30);

    const got = ht
      .entries()
      .slice()
      .sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));
    const expected = [
      ['x', 10],
      ['y', 20],
      ['z', 30],
    ].sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));

    expect(got).toEqual(expected);
  });
});