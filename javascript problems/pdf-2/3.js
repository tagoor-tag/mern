function findLargest(a, b, c) {
    // return Math.max(a, b, c)
    if (a > b && a > c) {
        return a;
    }else if (b > a && b > c) {
        return b;
    }else if (c > a && c > b) {
        return c;
    }
}

console.log(findLargest(4, 9, 2));
