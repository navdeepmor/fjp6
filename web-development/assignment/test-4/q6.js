// find output:

let a = { }

a[ Symbol()] = 2 a[ Symbol()] = 3;

console.log(a[Symbol()]);

// options: // A) Error // B) 3 // C) 2 // D) undefined