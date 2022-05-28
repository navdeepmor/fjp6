/*
    Non-primitive type -> array, objects & functions.
*/

function returnsAnything(param){
    let rVal = Math.random() > 0.5 ? true : "less than 0.5";
    return rVal;                                                                                                // function don't any return type therefore it can return any type of value like in our case it can return boolean or string.
}
let rVal = returnsAnything([1, 2, 3, 4, 5]);
console.log("rVal", rVal);


let a = function(n1, n2){                                                                                       // storing funtion in a variable 
            return n1-n2;                                                                                       // because of which they are know as first class citizens in JS
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




                                                        /* ---------- Ref --------- */

                                                /* function in JS without parameter & return type */

function sayHello(){                                                                                                // fn def
    console.log("Hello!!"); 
}             
sayHello();                                                                                                         // fn call

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