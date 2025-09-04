import { describe, it, expect, beforeEach } from 'vitest';
import { ArrayQueue } from '../classes/array-queue.js';

describe('ArrayQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new ArrayQueue();
  });

  it('starts empty', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
  });

  it('enqueue returns the instance for chaining', () => {
    const ret = queue.enqueue(1).enqueue(2);
    expect(ret).toBe(queue);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(1);
  });

  it('dequeue obeys FIFO', () => {
    queue.enqueue('a').enqueue('b').enqueue('c');
    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('c');
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });

  it('peek shows the front without removing', () => {
    queue.enqueue(10).enqueue(20);
    expect(queue.peek()).toBe(10);
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  it('size tracks number of elements', () => {
    expect(queue.size()).toBe(0);
    queue.enqueue(1).enqueue(2);
    expect(queue.size()).toBe(2);
    queue.dequeue();
    expect(queue.size()).toBe(1);
    queue.clear?.(); // optional clear if implemented later
  });

  it('isEmpty is accurate', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(42);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
