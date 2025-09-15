import { describe, it, expect, beforeEach } from 'vitest';
import { HashTable } from '../hash-table.js';

// NOTE: These tests target only Day 1 scope:
// - constructor(size)
// - #hash(key) (indirectly via set)
// - set(key, value)

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
