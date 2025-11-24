function shortenPath(path: string) {
    const parts = path.split('/')
    const stack = []
    for (const part of parts) {
        if (part === '' || part === '.') {
            continue
        }
        if (part === '..') {
            if (stack.length > 0) {
                stack.pop()
            } else {
                stack.push(part)
            }
        }
    }
    return '/' + stack.join('/')
}

console.log(shortenPath('/foo/../test/../foo//bar/./baz'))
