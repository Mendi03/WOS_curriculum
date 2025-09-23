import { MinHeap } from './min-heap.js';

const heap = new MinHeap();

const values = [50, 30, 20, 15, 10];
for (const value of values) {
  heap.insert(value);
  console.log(heap.data);
}
