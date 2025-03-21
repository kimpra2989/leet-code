/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const nums = []
  for (let i = 0; i < nums1.length; i++) {
    nums.push([nums1[i], nums2[i]])
  }

  nums.sort((a, b) => b[1] - a[1])

  // idx를 포함한 위치까지의 합
  const heap = new MinHeap()

  // init
  let sum = 0
  for (let i = 0; i < k; i++) {
    const num = nums[i][0]
    heap.push(num)
    sum += num
  }
  let max = sum * nums[k - 1][1]

  for (let i = k; i < nums.length; i++) {
    const min = heap.pop()
    sum -= min

    const num = nums[i][0]
    heap.push(num)
    sum += num
    max = Math.max(max, sum * nums[i][1])
  }

  return max
};

class MinHeap {
  constructor() {
    this.heap = [null]
  }

  getParentIdx(idx) {
    return idx >> 1
  }

  push(val) {
    this.heap.push(val)
    this.heapifyUp(this.heap.length - 1)
  }

  pop() {
    if (this.length == 1) {
      return this.heap.pop()
    }

    const root = this.heap[1]
    const leaf = this.heap.pop()
    this.heap[1] = leaf
    this.heapifyDown(1)

    return root
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  heapifyUp(idx) {
    const parentIdx = this.getParentIdx(idx)

    if (parentIdx > 0 && this.heap[idx] < this.heap[parentIdx]) {
      this.swap(idx, parentIdx)
      this.heapifyUp(parentIdx)
    }
  }

  heapifyDown(idx) {
    let minIdx = idx
    const leftIdx = idx << 1
    const rightIdx = (idx << 1) + 1

    if (this.length >= leftIdx && this.heap[minIdx] > this.heap[leftIdx]) {
      minIdx = leftIdx
    }

    if (this.length >= rightIdx && this.heap[minIdx] > this.heap[rightIdx]) {
      minIdx = rightIdx
    }

    if (minIdx != idx) {
      this.swap(idx, minIdx)
      this.heapifyDown(minIdx)
    }
  }

  get length() {
    return this.heap.length - 1
  }
}