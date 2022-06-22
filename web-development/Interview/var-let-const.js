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
            let   -
            const -
        2. memory allocate:
            var - once
*/
                                                     /* ------ Temporal Dead Zone ------ */


                                                     /* -------- { Block } Scope -------- */


                                                     /* ------- variable shadowing ------- */
                                                     

                                                     /* --------- var / let / const ------- */



                                                            /* ------- Ref ------- */
/* Q1. */
var a = 10;
console.log("line 44", a);
function fn() {
    console.log("line 46", a);
    var a = 20;
    a++;
    console.log("line 49", a);
    if(a) {
        var a = 30;                                                                                     
        a++;
        console.log("line 53", a);                                                                                  // o/p: ?
    }
    console.log("line 55", a);                                                                                      // o/p: ?
}
fn();
console.log("line 58", a);                                                                                          // o/p: ?

/* Q2. */
var a = 10;
console.log("line 44", a);
function fn() {
    console.log("line 46", a);
    var a = 20;
    a++;
    console.log("line 49", a);
    if(a) {
        var a;                                                                                     
        a++;
        console.log("line 53", a);
    }
    console.log("line 55", a);
}
fn();
console.log("line 58", a);

/* Q3. */
let letFruit = "orange";
let varFruit = "orange";
console.log("leftFruit", letFruit, "varFruit", varFruit);   
{
    let letFruit = "apple";
    let varFruit = "apple";
    console.log("leftFruit", letFruit, "varFruit", varFruit);                                                       // o/p: ?
}
console.log("leftFruit", letFruit, "varFruit", varFruit);                                                           // o/p: ?