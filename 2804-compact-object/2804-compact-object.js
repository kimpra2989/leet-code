/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    const type = typeCheck(obj)
    if (type === 'object') return handleObject(obj)
    return handleArray(obj)
};

function typeCheck(x) {
    if (!x) return 

    if (typeof x === 'object') {
        if (Array.isArray(x)) return 'array'
        return 'object'
    }
}

function handleArray(arr) {
    const result = []

    for (const ele of arr) {
        let sub
        const type = typeCheck(ele)
        if (type === 'object') sub = handleObject(ele)
        else if (type === 'array') sub = handleArray(ele)
        else {
            if (!ele) continue
            sub = ele
        }
        result.push(sub)
    }

    return result
}

function handleObject(obj) {
    const result = {}

    for (const key in obj) {
        console.log(key)
        let sub
        const value = obj[key]
        const type = typeCheck(value)
        if (type === 'object') sub = handleObject(value)
        else if (type === 'array') sub = handleArray(value)
        else {
            if (!value) continue
            sub = value
        }
        result[key] = sub
    }

    return result
}