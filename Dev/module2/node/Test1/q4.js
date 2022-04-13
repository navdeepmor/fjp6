/*
Title: Dynamic Game of Arrays

Meta-Tags: Javascript, JS, interview, questions, interview questions,functions,arrays,practice

Description: Find output of the following:
*/

let arr = [1, 2, 3]; 

(function () { 
    for (x in arr)  //  it would run for 3 times as arr have only 3 value in our case think of it as for loop executing for arr.length
        arr.unshift(arr.pop()); 
    console.log(arr); 
})();

let randomAdder = function (arr = ["a", "b"]) {  //  inside the () --> we have specified the default value
    arr[arr.length * arr.length] = arr.length * arr.length; 
};

randomAdder(arr);  
randomAdder();  // in this case it would use the default value provided in function because we haven't passed any value to calling funtion

console.log(arr[9]); 
console.log(arr[8]);

/*
Options:

A)
[ 3, 2, 1 ] 9 ["a", "b"]

B)
[ 3, 2, 1 ] 9 undefined

C)
[ 1, 2, 3 ] 9 ["a", "b"]

D)
[ 1, 2, 3 ] 9 undefined

Solution: D
*/