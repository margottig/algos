/* Write a function that takes an array of numbers as a parameter. 
Find the maximum, minimum, and average number of all the numbers in the array. 
Return these values in a nicely formatted string. */

function maxMINavg(arr){
    function recursion(arr){
        if (arr.length <= 1){
            console.log('Array must contain at least 2 elements');
            return arr; 
        }
        else {    
            let maxNumIndex = 0;
            for (let i=1; i<arr.length; i++){
                if(arr[i] > arr[maxNumIndex]){
                    maxNumIndex = i;
                }
            }
            let maxValue = arr[maxNumIndex];
            arr[maxNumIndex] = arr[arr.length-1];
            arr[arr.length-1] = maxValue;
            arr.pop();
            recursion(arr).push(maxValue);
            return arr;
        }
    }
    let orderedArray = recursion(arr);
    let minValue =  orderedArray[0];
    let maxValue = orderedArray[orderedArray.length-1];
    var sumArray = 0;
    for (let i=0; i<orderedArray.length; i++){
        sumArray = sumArray + orderedArray[i];
    }
    let avgArray = sumArray/orderedArray.length
    
    return (['The minimum is '+minValue, 'the maximum is '+maxValue, 'and the average is '+avgArray].join(' '));
}

let x = maxMINavg([1,-30,5,56,12,3]);
console.log(x);