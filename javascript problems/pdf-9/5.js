const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function merge(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(merge.apply(0, [arr1, arr2]));
