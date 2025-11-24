function shortenPath(path) {
    var parts = path.split('/');
    var stack = [];
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        if (part === '' || part === '.') {
            continue;
        }
        if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
    }
    console.log(stack)
    return '/' + stack.join('/');
}
console.log(shortenPath('/foo/../test/../foo//bar/./baz'));
