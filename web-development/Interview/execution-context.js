/* 
How JS works?
JS - Synchronous, single thread
top to bottom & left to right 
*/

/* 
    1. memory allocate 2. then execution 
        gec:  global exection context 
        ec:   execution context  
*/

/* ---------------------------------------------------------------- */

/* Q1. */
// var a = 10;

// function print(){
//     var b = 20;
//     console.log(b);
// }

// var c = 30;
/* Stack --> 1.gec 2.ec */
/* 1.gec: 1.memory allocate - a:undefined c:undefined print:8k print(){ - which will be defined in heap & contains address before print --> before execution */
/* 2. ec: 1.memory allocate - b:undefined  */

/* ---------------------------------------------------------------- */

/* return --> destroys the ec */

/* ---------------------------------------------------------------- */

/* Q3. */
print();

var print = function(){
    console.log("tell me ans?");
}

print();
/* Stack --> 1.gec 2.ec */
/* 1.gec: 1.memory allocate - print:undefined --> before execution */
/* error: print is not a function because it's undefined  */
/* ---------------------------------------------------------------- */



                                                            /* ------- Ref ------- */
/*
Why execution context?      In JS there is no main, execution context is same as main of JS  
What is execution context?  execution context is wrapper in which JS supplies many things and within which our code runs. In execution context we have two 
                            important things are 
                                1. global object -  every execution context get a global object, it's different in node JS, different in browser, different in 
                                                    photoshope etc, which provides us ent. Even if we didn't write any code & we just run our file than also we 
                                                    would get a global object along.   
                                2. this          -  when we runs our code at start along with global object, JS engine gave us this variable.  

                            Note:
                                In browser global object is know as window.
                                In case of nodeJS this is an empty object whereas in browser it's equal to window object. 

                            in JS there is nothing like main or etc. Code which is not inside a funtion that code is know as global code or that piece of area 
                            is know global area and wrapper for that is know as global execution context.    
*/

console.log(this);                                                                                              // o/p: ?

console.log("val1 is " + val1);                                                                                 // o/p: ?                                                                                   
var val1;
console.log("val1 is " + val1);                                                                                 // o/p: ?
val1 = -9;
console.log("val1 is " + val1);                                                                                 // o/p: ?


                                                            /* ------- Q1. ------- */
function real() {
    console.log("I'm real, Always run me");
}
function real() {
    console.log("No I'm the real one")
}
function real() {
    console.log("You both are wast");
}
real();                                                                                                         // o/p: ?

                                                            /* ------- Q2. ------- */
function real() {
    console.log("I'm real, Always run me");
}
function real() {
    console.log("No I'm the real one")
}
real();                                                                                                         // o/p: ?
function real() {
    console.log("You both are wast");
}

