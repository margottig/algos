/* Create a function that recreates the FizzBuzz word game which accepts a parameter n. 
Return a nicely formatted string with all elements (make it easier to read). */ 

function fizzBuzz(n){
    if (typeof n === 'number' && n>0){
        let arr = [];
        for (let i=1; i<=n; i++){
            if (i%3==0 && i%5==0){
                arr.push('FizzBuzz');
                //console.log('FizzBuzz');
            }
            else if (i%3==0 && i%5!=0){
                arr.push('Fizz');
                //console.log('Fizz');
            }
            else if (i%3!=0 && i%5==0){
                arr.push('Buzz');
                //console.log('Buzz');
            }
            else{
                arr.push(i);
                //console.log(i);
            }
        }
        //return arr.toString();
        temp = arr[arr.length-1];
        arr.pop()
        return arr.join(', ')+', and '+ temp +'.';
    }
    else{
        return 'Parameter must be a positive number'
    }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz('somestring'));

