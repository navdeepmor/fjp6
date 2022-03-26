/* hosting - accessing variable before declaration */
// console.log(a);
// var a = 10;

/* var - hosting, redeclaration, reinitialization */
// console.log(b);
// var b;  // declaration
// console.log(b);
// b = 20;  // initialization
// b = 30; 
// var b = 50;
// console.log(b);

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