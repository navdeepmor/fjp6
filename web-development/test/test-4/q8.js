// Q. Create a function using map that returns an array like object of all the arguments passed to it.
function fn1(arr) {
    arr.map((arr) => {
        for(let j = 0; j < arr.length; j++) {
            return { i: j }
        }
    })
}

arr = [22, 5, 8, 19, 53];
console.log(fn1(arr))