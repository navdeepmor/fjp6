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
var a = 10;

function print(){
    var b = 20;
    console.log(b);
}

var c = 30;
/* stack --> 1.gec 2.ec */                                                                                      // call stack
/* 1.gec: 1.memory allocate - a:undefined c:undefined print:8k  print(){ - which will be defined in heap & contains address before print --> before execution */
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
/* stack --> 1.gec 2.ec */
/* 1.gec: 1.memory allocate - print:undefined --> before execution */
/* error: print is not a function  because it's undefined  */
/* ---------------------------------------------------------------- */

 /* Q4. */
console.log("line number 1", varName);
var varName = 10;

function b() {
    console.log("line number 5", varName);                                                                  // inside b it doesn't have varName thus it will look outside it scope because fn in JS are Lexical Scope i.e. it will check in ec of one in which it was called and incase it doesn't found there then it will look him outside also & so on till gec 
}

console.log("line number 7", varName);

function fn() {
    console.log("line number 9", varName);                                                                  // inside fn it have varName & till here it's value is undefined
    var varName = 20;
    b();                                                                                                    // we have call b here, but it's actually def outside therefore in such case we see lexical(literal) scope
    console.log("line number 13", varName);
}
fn();
/* call stack --> 1.gec 2.ec 3.ec 
   1.gec: 1.memory allocate - varName:undefined b:8k fn:11k --> before execution
   2. ec: 1.memory allocate - varName:undefined 
   3. ec: 1.memory allocate -  

            |---------------------------|                     |                   |
            |  global: {..}  this: {}   |                     |-------------------|
      ec    |                           |                     |                   |
            |                           |                     |-------------------| 
            |---------------------------|                     |                   |
            |  global: {..}  this: {}   |                     |-------------------|
      ec    |                           |                     |                   |
            |  varName: undefined       |                     |-------------------| 
            |---------------------------|                     |                   |
            |  global: {..}  this: {}   |                     |-------------------|
     gec    |                           |                     |                   |
            |  varName: undefined       |                     |-------------------| 
            |  b      : 8k              |                  8k |  b() { .. }       |             
            |  fn     : 11k             |                     |-------------------|                         
             ---------------------------                  11k |  fn() { .. }      |
                     call stack                                -------------------
                                                                      Heap

    Note:
        this - calc at every gec & ec.
*/

                                                            /* ------ Scope ------ */
/*    
    scope - { }                                                                                                 function fn { .. }  

    Lexical Scope -  immediate outside fn scope                       
    Scope Chain   -  1. incase a fn doesn't have a variable inside it's scope  2. then it will look in ec of one outside it scope & again if there also it doesn't get that variable  3. then again it will look outside of this in ec of curr parent. 1 - 2 - 3 is know as scope chain   
*/




                                                            /* ------- Ref ------- */
/*
Why execution context?   
What is execution context?  Wrapper: 
                                1. global object 
                                2. this   

Creattion phase: 
    1. Memory allocates 
        - variable  undefined                                                                                   [ Hoizting ]
        - fn        12k

                                                        
*/

console.log(global);                                                                                            // o/p: ?
console.log(this);                                                                                              // o/p: ?

console.log("val1 is " + val1);                                                                                 // o/p: ?                                                                                   
var val1;
console.log("val1 is " + val1);                                                                                 // o/p: ?
val1 = -9;
console.log("val1 is " + val1);                                                                                 // o/p: ?


                                                            /* ------- Q1. ------- */
function fn1() {
    console.log("I'm going to run");
}
function fn1() {
    console.log("please run me")
}
function fn1() {
    console.log("let's see");
}
fn1();                                                                                                         // o/p: ?

                                                            /* ------- Q2. ------- */
function fn2() {
    console.log("I'm going to run");
}
function fn2() {
    console.log("please run me")
}
fn2();                                                                                                         // o/p: ?
function fn2() {
    console.log("let's see");
}

                                                            /* ------- Q3. ------- */
fn3(); 
function fn3() {
    console.log("I'm going to run");
}
function fn3() {
    console.log("please run me")
}                                                                                                               // o/p: ?
function fn3() {
    console.log("let's see");
}