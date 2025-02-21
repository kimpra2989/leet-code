/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const visited = new Set()
    let provinces = 0

    function dfs(city) {
        if (visited.has(city)) return

        visited.add(city)

        const connected = []
        isConnected[city].forEach((c, i) => {
            if (c == 1) connected.push(i)
        })

        for (const c of connected) {
            dfs(c)
        }
    }

    for (let i = 0; i < isConnected.length; i++) {
        if (visited.has(i)) continue
        dfs(i)
        provinces++
    }

    return provinces
};