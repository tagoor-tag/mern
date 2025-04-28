function mostFrequent(arr) {
    for (let element of arr) {
        let frequency = {};  
        let maxCount = 0;    
        let mostFrequentNum; 

        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            frequency[num] = (frequency[num] || 0) + 1;

            if (frequency[num] > maxCount) {
                maxCount = frequency[num];
                mostFrequentNum = num;
            }
        }

        return mostFrequentNum;
    }
}

console.log(mostFrequent([2, 3, 3, 3, 2, 5, 3, 2, 4])); 