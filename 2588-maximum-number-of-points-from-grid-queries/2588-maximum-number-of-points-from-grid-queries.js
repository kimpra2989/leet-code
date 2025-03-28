/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
    const rows = grid.length
    const cols = grid[0].length

    const res = new Array(queries.length).fill(0)

    queries = queries.map((query, idx) => ({ query, idx }))
    queries.sort((a, b) => a.query - b.query)

    let point = 0
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false))
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    const failsHeap = new MinHeap()
    failsHeap.push(new Point(0, 0))
    for (const { query, idx } of queries) {
        while (query > failsHeap.peak) {
            const { r, c } = failsHeap.pop()
            visited[r][c] = false
            dfs(r, c, visited, query)
        }

        res[idx] = point
    }

    return res


    function dfs(r, c, visited, query) {
        const num = grid[r][c]
        const isVisited = visited[r][c]
        if (isVisited === true) return

        visited[r][c] = true

        if (query > num) point++
        else {
            failsHeap.push(new Point(r, c))
            return
        }

        for ([dr, dc] of dir) {
            if (
                r + dr >= 0 &&
                r + dr < rows &&
                c + dc >= 0 &&
                c + dc < cols
            ) {
                dfs(r + dr, c + dc, visited, query)
            }
        }
    }

    function Point(r, c) {
        this.r = r
        this.c = c
        this.valueOf = () => {
            return grid[this.r][this.c]
        }
    }
};

class MinHeap {
    constructor(valueMap) {
        this.heap = [null]
    }

    getParentIdx(idx) {
        return idx >> 1
    }

    push(obj) {
        this.heap.push(obj)
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

    get peak() {
        return +this.heap[1]
    }
}