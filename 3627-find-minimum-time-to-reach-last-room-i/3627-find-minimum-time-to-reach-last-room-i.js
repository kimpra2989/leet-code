/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
  const rows = moveTime.length
  const cols = moveTime[0].length
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(Infinity))
  visited[0][0] = 0

  const heap = new minHeap()
  heap.push({ r: 0, c: 0, t: 0 })

  while (heap.length) {
    const { r, c, t } = heap.pop()

    if (r === rows - 1 && c === cols - 1) {
      return t
    }

    for (const [dr, dc] of dirs) {
      const nextR = r + dr
      const nextC = c + dc

      if (
        nextR >= 0 &&
        nextR < rows &&
        nextC >= 0 &&
        nextC < cols
      ) {
        nextTime = t > moveTime[nextR][nextC] ? t + 1 : moveTime[nextR][nextC] + 1
        if (visited[nextR][nextC] <= nextTime) continue

        visited[nextR][nextC] = nextTime
        heap.push({ r: nextR, c: nextC, t: nextTime })
      }
    }
  };
}

class minHeap {
  constructor() {
    this.heap = [null]
  }

  get length() {
    return this.heap.length - 1
  }

  push(val) {
    this.heap.push(val)
    this.heapifyUp(this.length)
  }

  heapifyUp(idx) {
    if (idx === 1) return

    const parentIdx = idx >> 1

    if (this.heap[parentIdx]['t'] > this.heap[idx]['t']) {
      this.swap(parentIdx, idx)
      this.heapifyUp(parentIdx)
    }
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  pop() {
    if (this.length === 1) {
      return this.heap.pop()
    }

    let min = this.heap[1]

    this.heap[1] = this.heap.pop()
    this.heapifyDown(1)

    return min
  }

  heapifyDown(idx) {
    let minIdx = idx
    const leftIdx = idx << 1
    const rightIdx = leftIdx + 1

    if (leftIdx <= this.length && this.heap[leftIdx]['t'] < this.heap[minIdx]['t']) {
      minIdx = leftIdx
    }

    if (rightIdx <= this.length && this.heap[rightIdx]['t'] < this.heap[minIdx]['t']) {
      minIdx = rightIdx
    }

    if (minIdx !== idx) {
      this.swap(idx, minIdx)
      this.heapifyDown(minIdx)
    }
  }
}