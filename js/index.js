function shortenPath(path) {
    const parts = path.split('/')
    const stack = []
    console.log(parts)
    for (const part of parts) {
        if (part === '' || part === '.') {
            continue
        }
        console.log(part)
        if (part === '..') {
            if (stack.length > 0) {
                stack.pop()
            } else {
                stack.push(part)
            }
        }
    }
    console.log(stack)
    return '/' + stack.join('/')
}

console.log(shortenPath('/foo/../test/../foo//bar/./baz'))