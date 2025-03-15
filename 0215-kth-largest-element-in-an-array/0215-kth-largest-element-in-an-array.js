/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxHeap()

  for (const num of nums) {
    heap.push(num)
  }

  let res
  for (let i = 0; i < k; i++) {
    res = heap.pop()
  }

  return res
};

class MaxHeap {
  constructor() {
    this.heap = [null]
  }

  push(val) {
    this.heap.push(val)
    this.#heapifyUp(this.heap.length - 1)
  }

  pop() {
    const max = this.heap[1]
    this.heap[1] = this.heap.pop()
    this.#heapifyDown(1)
    return max
  }

  #heapifyUp(idx) {
    let parentIdx = this.#parentIdx(idx)
    if (parentIdx > 0 && this.heap[parentIdx] < this.heap[idx]) {
      this.#swap(parentIdx, idx)
      this.#heapifyUp(parentIdx)
    }
  }

  #heapifyDown(idx) {
    const leftIdx = idx << 1
    const rightIdx = (idx << 1) + 1
    let largestIdx = idx

    if (this.heap[leftIdx] < this.heap.length && this.heap[idx] < this.heap[leftIdx]) {
      largestIdx = leftIdx
    }
    if (this.heap[rightIdx] < this.heap.length && this.heap[largestIdx] < this.heap[rightIdx]) {
      largestIdx = rightIdx
    }

    if (largestIdx != idx) {
      this.#swap(idx, largestIdx)
      this.#heapifyDown(largestIdx)
    }
  }

  #swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  #parentIdx(idx) {
    return idx >> 1
  }
}