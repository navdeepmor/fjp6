                                                        /* ----  Types of function ---- */

                                                        /* ------- fn statement ------- */
function saysHello(param) {
    console.log("hello", param);
}
                                                        /* ------ fn invocation ------ */
saysHello();                                                                                                        // o/p: hello undefined | Since we haven't pass any value and by fn defination it expect parameter thus it will take it's default value which is undefined.  
let rval = saysHello();                                                                                             // here also we can see that the fn doesn't return any value thus rval would be undefined.
                                                        /* ------ fn expression ------ */
let fnContainer = function fn() {                                                                                   // here we are storing the address of fn in variable fnContainer at which fn defination is present
    console.log("I am expression");
}
fnContainer();                                                                                                      // with this fn would be invoked because we have store fn address in var fnContainer  
fn();                                                                                                               // o/p: ReferenceError: fn is not defined | bacause fn is now stored in var fnContainer
                                                        /* ---- Anonymous function ---- */
let fnContainer1 = function () {                                                                                    // fn name is optional. When we didn't give name to a fn then it becomes anonymous fn. Annonymous fn has it's use case in higher-order fn.
    console.log("I'm an anonymous function");
}
fnContainer1();        
// console.log(fnContainer1); 
                                                /* IIFE - Immediately Invoked Function Expression */       
(function fn() {                                                                                                    // Why IFEE? - used where we have to invoke a fun without user input like when page loads that time we have to perform some initialization task. Polllution - Then we didn't like to keep any scope of changing fn definaiton later on | use case are in require, pollution, jQuery.
    console.log("I'm IIFE");                                                                                        // earlier when we didn't have let & const then using var for storing fn reference gives lot of issues then there was only this way  
    console.log("I would get invoked on my own");
})();
                                                        /* --------- Arrow fn --------- */   
let fn = (num) => {                                                                                                 // in case of single parameter like in this case num is only there then we can skip (), Also we can skip return. Thus we can also write this as $let fn = num => num*num;
    return num*num;
}         
console.log(fn(5));
                                                       /* ----- First Class Citizens ----- */
                                                                                                                    // 1. Assignment -> fn expression  
function fn1(param) {                                                                                               //    Variable can be passed as a paramenter 
    console.log(param);
    return 'completed';
}   

function fn2() {
    console.log("You are inside fn2");
}

fn1([-9, 2, 3, 7, 1]);
fn1(fn2);                                                                                                           //    here we have passed fn2 that means we passed address of fn2               


function fn3(param) {                                                                                               // 2. function can be passed as a parameter | used in fp, callback, higher order functions ex. map, reduce or filter.                                                                                          
    console.log(param);
    param();
    return 'completed';
}   

function fn4() {
    console.log("You are inside fn4");
}

fn3(fn4);                                                                                                           // o/p: ?

function outer() {                                                                                                  // 3. function can be returned from a function | used in closure
    console.log("I'm outer returning inner");
    return function inner() {                                                                                       //    we can also make it as annonymous function like $return function () { console.log("I'm inner") }
        console.log("I'm inner");
    }
}
let rVal1 = outer();
console.log("returned value", rVal1);
rVal1();