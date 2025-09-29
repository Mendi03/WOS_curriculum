import { MinHeap } from './min-heap.js';

// const heap = new MinHeap();

// const values = [50, 30, 20, 15, 10];
// for (const value of values) {
//   heap.insert(value);
//   console.log(heap.data);
// }

const arr = [50, 30, 20, 15, 10, 40, 60, 5];

const byInsert = new MinHeap();
arr.forEach((v) => byInsert.insert(v));

const byHeapify = new MinHeap();
byHeapify.heapify(arr);

// Extract all to compare sorted order; both should yield same sequence
const a = [],
      b = [];
let v;
while ((v = byInsert.extractMin()) !== undefined) a.push(v);
while ((v = byHeapify.extractMin()) !== undefined) b.push(v);