interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function (fn) {
    const result = {}

    this.forEach(ele => {
        const key = fn(ele);
        (result[key] ??= []).push(ele);
    })

    return result
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */