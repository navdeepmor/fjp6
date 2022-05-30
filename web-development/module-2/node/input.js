let cmdlineargs = process.argv;
console.log(cmdlineargs);

/* node input.js -9 --> here -9 is our input */
/* in o/p we would get an array that means that process.argv is an array where at 0th & 1st idx it will contain path, at 3rd idx there would be our input */
/* if we gave a input inside "" then it would be taken as together i.e. mapped to a single idx */
/* cann't write let - keyword in terminal to take as input */
/* everything is coming as a string this is only when we are reading from cmdline otherwise if we write let i = 10 --> here it would be number only */

// let i = cmdlineargs[2]
// console.log(i);
// console.log(typeof i);  /* i/p: node input.js 10 */
// i = i + 30;
// console.log(i);

let j = parseInt(parseInt(cmdlineargs[2], 10)); /* converts the given string into binary, here 10 is to signify that conversion to decimal i.e. base 10 */
console.log(typeof j)
j = j + 30;
console.log(j);