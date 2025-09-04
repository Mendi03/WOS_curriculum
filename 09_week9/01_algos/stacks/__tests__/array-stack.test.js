import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ArrayStack } from '../classes/array-stack.js';

describe('ArrayStack', () => {
  let stack;

  beforeEach(() => {
    stack = new ArrayStack();
  });

  it('starts empty', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
  });

  it('push returns the instance for chaining', () => {
    const ret = stack.push(1).push(2);
    expect(ret).toBe(stack);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('push/pop obey LIFO', () => {
    stack.push('a').push('b').push('c');
    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe('c');
    expect(stack.pop()).toBe('c');
    expect(stack.pop()).toBe('b');
    expect(stack.pop()).toBe('a');
    expect(stack.pop()).toBeNull(); // underflow
    expect(stack.isEmpty()).toBe(true);
  });

  it('peek returns top without removing', () => {
    stack.push(10).push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);
    expect(stack.toArray()).toEqual([20, 10]);
  });

  it('clear empties the stack and supports chaining', () => {
    stack.push(1).push(2).push(3);
    const ret = stack.clear();
    expect(ret).toBe(stack);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
  });

  it('toArray returns top→bottom order and a shallow copy', () => {
    stack.push(1).push(2).push(3); // top is 3
    const arr = stack.toArray();
    expect(arr).toEqual([3, 2, 1]); // top-first

    // Mutating the returned array should NOT mutate the stack
    arr.pop();
    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });

  it('print logs each element from top to bottom (one per line)', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    try {
      stack.push('x').push('y').push('z');
      const ret = stack.print();
      expect(ret).toBe(stack);
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy.mock.calls.map((args) => args[0])).toEqual(['z', 'y', 'x']);
    } finally {
      spy.mockRestore();
    }
  });
});
