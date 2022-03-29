let arr = [];
console.log(arr);

/* array with elements */
let elementArr = [19, 3, -1, "I am string", 'e', false, 6.982];

console.log(elementArr);
console.log("element at 6th index "+elementArr[6]);

elementArr[1] = "Nothing"; // replaces element at index 1

/* arrays method */
elementArr.push("new item"); // push method add element at last
console.log(elementArr);

elementArr.pop(); // pop
elementArr.shift(); // remove element from start of array

elementArr.unshift("Add me at beginning"); //add elements at start of array

console.log(elementArr)