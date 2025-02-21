/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Array(rooms.length).fill(false)

    function dfs(room) {
        if (visited[room]) return

        visited[room] = true
        const keys = rooms[room]

        for (const key of keys) {
            dfs(key)
        }
    }

    dfs(0)

    return visited.every(x => x)
};