/* hosting - accessing variable before declaration */
    // console.log(a);
    // var a = 10;

/* var - hosting, redeclaration, reinitialization */ 
    // console.log(b);
    // var b;                                                                                                       // declaration
    // console.log(b);
    // b = 20;                                                                                                      // initialization
    // b = 30;
    // var b;                                                                                                       // ?  for var memory allocates only once and since at line 7 we already allocates memory for b thus it will not create memory for it again i.e. line 11 skip
    // console.log(b);                                                                                              // o/p: ? 30 ***

/* let - reinitialization, TDZ - Temporal Dead Zone --> here it's not accessible */
    // console.log(c);
    // let c;
    // c = 30;
    // c = 40;
    // let c = 60;
    // console.log(c);

/* const - declaration with initialization, TDZ */
    // console.log(d);
    // const d;
    // d = 30;
    // d = 40;
    // const d = 60;
    // console.log(d);

/*
    Note:
        1. scope:
            var   -  fn
            let   -  { block }
            const -  { block }   
        2. memory allocate:
            var - once
*/
                                                     /* ------ Temporal Dead Zone ------ */
/* line 94 */

                                                     /* -------- { Block } Scope -------- */
/* line 107 */

                                                     /* ------- variable shadowing ------- */
/*               
    1. Legal shadowing 
        line 123
    2. Inlegal shadowing  
        line 150
*/
                                                     /* --------- var / let / const ------- */
/*
Exception:
const arr = [3, 7, -1, 2];
arr.push(-9);                                                                                                          // we are able to push a value in arr even though it's declared with const 
console.log(arr);                                                                                                      // o/p: ?
arr.shift()                                                                                                            // How is it possible? we usually stores the first address of arr but here we are able to deleted first element even though arr defined const.
                                           
                                              Heap
                                           ------------
                                          | idx        |
                |            |            |  0 - 10K   |
                |            |            |  1 - 12K   |
                |------------|            |  2 - 14k   |
                |     8K     |  ----->    |  3 - 16K   |
                 ------------             |  4 - 18K   |
                    Stack                 |            |
                                           ------------
                                                8K      

 */ 

let obj = {                                                             
    lname: "Mor",
    age: 24,
    sayHi: function() {
             console.log("hey this is " + obj.lname);     
           }
}

for(let key in obj) {                                                                                                   // for-in loop on object                                                                                          
    console.log(key + " : " + obj[key]);
}
obj.sayHi();

let arr2 = [3, -5, 1, 0];
arr2.prop1 = "property added";
arr2.printTask = function() {
                  console.log("this is printed ");   
                }
console.log(arr2);                                                                                                      // why we are able to store key - value & func.?
for(let key in arr2){
    console.log(key + " : " +arr2[key]);                                                                                // thus in JS there is no array we use objects as an array
}

arr2[95] = 41;
console.log(arr2.length);                                                                                               // o/p: ?
console.log(arr2[25]);                                                                                                  // o/p: ?
console.log(obj[25]);                                                                                                   // o/p: ?

function fn1() {                                                                                                        // function    -  object
    console.log("this is fn1");                                                                                         //                  key :  value
}                                                                                                                       //             -  code property 
fn1.prop1 = "this is property1 of fn";                                                                                  //                  ex: fn1 { ... } in function that can be executed when we invoked that function  
fn1.fn2 = function() {
             console.log("fn2 method is added to fn1");
          }
console.log(fn1);                                                                                                       // o/p: ?                                                                                                   
fn1();                                                                                                                  // o/p: ?    
fn1.fn2();                                                                                                              // o/p: ?                                                                                                          

/*
    Everything is object 
        ex: dates, errors & modules
    
    Premitive type
        number, string, boolean, undefined, null, symbol
*/

                                                            /* ------- Ref ------- */
/* Q1. */
// var a = 10;
// console.log("line 44", a);
// function fn() {
//     console.log("line 46", a);
//     var a = 20;
//     a++;
//     console.log("line 49", a);
//     if(a) {
//         var a = 30;                                                                                     
//         a++;
//         console.log("line 53", a);                                                                                  // o/p: ?
//     }
//     console.log("line 55", a);                                                                                      // o/p: ?
// }
// fn();
// console.log("line 58", a);                                                                                          // o/p: ?

// /* Q2. */
// var a = 10;
// console.log("line 44", a);
// function fn() {
//     console.log("line 46", a);
//     var a = 20;
//     a++;
//     console.log("line 49", a);
//     if(a) {
//         var a;                                                                                     
//         a++;
//         console.log("line 53", a);
//     }
//     console.log("line 55", a);
// }
// fn();
// console.log("line 58", a);

/* Q3. */
// let letFruit = "orange";
// let varFruit = "orange";
// console.log("leftFruit", letFruit, "varFruit", varFruit);   
// {
//     // console.log(letFruit);                                                                                          // TDZ - ReferenceError: Cannot access 'letFruit' before initialization
//     let letFruit = "apple";                                                                                         // since letFruit is re-defined in { block } not in global where we already we had defined it therefore it will not throw any error as it is block scope thus memory will be reserved for let when { block } is read. If we would have redeclared them in global them it would had thrown error
//     let varFruit = "apple";
//     console.log("leftFruit", letFruit, "varFruit", varFruit);                                                       // o/p: ?   
// }
// console.log("leftFruit", letFruit, "varFruit", varFruit);                                                           // o/p: ?  

/* Q4. */
// let letFruit = "orange";
// let varFruit = "orange";
// console.log("leftFruit", letFruit, "varFruit", varFruit);   
// {
//     console.log(letFruit);                                                                                          // TDZ - ReferenceError: Cannot access 'letFruit' before initialization
//     let letFruit = "apple";                                                                                         // it shadow the value of letFruit which is out side it { block } scope as we had re-declared the it which have same name in the current { block } as is with const also                                                                                    
//     let varFruit = "apple";
//     {
//         console.log("letFruit", letFruit, "varFruit", varFruit);                                                    // o/p: ?   since letfruit doesn't defined in this scope therefore it will take letFruit value from outside scope 
//     }
//     console.log("leftFruit", letFruit, "varFruit", varFruit);                                                       // o/p: ?   
// }
// console.log("leftFruit", letFruit, "varFruit", varFruit);      

/* Q4. */
// var fruit = "orange";
// console.log("fruit", fruit);   
// {                                                                                        
//     let fruit = "apple";                                                                                                // legal shadowing
//     console.log("fruit", fruit);                                                                                        // o/p: ?   
// }
// console.log("fruit", fruit);    

// /* Q5. */
// let fruit = "orange";
// console.log("fruit", fruit);   
// {                                                                                        
//     let fruit = "apple";                                                                                                // legal shadowing
//     console.log("fruit", fruit);                                                                                        // o/p: ?   
// }
// console.log("fruit", fruit);  

// /* Q6. */
// let fruit = "orange";
// console.log("fruit", fruit);   
// {                                                                                        
//     const fruit = "apple";                                                                                              // legal shadowing
//     console.log("fruit", fruit);                                                                                        // o/p: ?   
// }
// console.log("fruit", fruit);  

/* Q7. */
// let fruit = "orange";
// console.log("fruit", fruit);   
// {                                                                                        
//     var fruit = "apple";                                                                                                // Illegal shadowing
//     console.log("fruit", fruit);                                                                                        // o/p: ?   
// }
// console.log("fruit", fruit);  