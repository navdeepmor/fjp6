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
         

