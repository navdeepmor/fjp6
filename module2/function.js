/* function in JS without parameter & return type */
function sayHello(){
    console.log("Hello!!");
}

sayHello(); // funtion calling

/* funtion with parameter */
function sum(n1, n2){
    let add = n1+n2;
    console.log(add);
}

/* funtion with parameter & return type */
function divi(n1, n2){
    return n1/n2;
}
divi(10, 3);  // o/p: 
console.log(divi(10, 3));


/* storing funtion in a variable */ 
/* because of which they are know as first class citizens in JS */
let a = function(n1, n2){  
            return n1-n2;
        }

console.log(a(14, 9));

/* IIFE Immediately Invoked Function Expression */
(function(){
    console.log("Inside IIFE");
})();

/* IIFE with parameter */
(function(n1, n2){
    console.log(n1%n2);
})(17, 4);


