import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LinkedListStack } from '../classes/list-stack.js';

describe('LinkedListStack', () => {
  let stack;

  beforeEach(() => {
    stack = new LinkedListStack();
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

  it('toArray returns top→bottom order', () => {
    stack.push(1).push(2).push(3); // top is 3
    const arr = stack.toArray();
    expect(arr).toEqual([3, 2, 1]);
    // check independence
    arr.pop();
    expect(stack.size()).toBe(3);
  });

  it('print logs top→bottom values', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    try {
      stack.push('x').push('y').push('z');
      const ret = stack.print();
      expect(ret).toBe(stack);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0][0]).toContain('z → y → x');
    } finally {
      spy.mockRestore();
    }
  });

  it('print logs (empty) for an empty stack', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    try {
      stack.print();
      expect(spy).toHaveBeenCalledWith('(empty)');
    } finally {
      spy.mockRestore();
    }
  });
});
