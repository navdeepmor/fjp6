/* printing in javaScript */
console.log("Swagat hai aap sabhi logo ka!!!");  /* ; is optional in JS */  

/* to run the program right click the intro.js & select Open in Integrated Terminal --> node intro.js */
/* node is a runtime environment */

/* variables in JS */
let a = 10; //Number
console.log(a);

let ch = 'a'; //Character
console.log(ch);

let str = 'I am string'; //String
console.log(str);

let bool = true; //boolean
console.log(bool);

/* loops */
for(let i=0;i<6;i++){
    console.log(i);
}

let count = 10;
while(count>0){
    console.log(count);
    count--;
}

/* prime Number */
let n = 151;
let flage = true;

for(let i=2;i*i<=n;i++){
    if(n%i==0){
        flage = false;
        break;
    }
}

console.log(flage);