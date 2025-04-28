let arr = [10,20,30,10,20,30,10,20,10,10];

// Define the value to search for and the nth occurrence to find
let value = 10;
let n = 6;
let count = 0;

// Loop through the array
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        count++;
        if (count === n) {
            console.log(` ${n} th term- ${value} is: ${i}`);
            break;
        }
    }
}

if (count < n) {
    console.log(`${n}- ${value} was not found.`);
}
