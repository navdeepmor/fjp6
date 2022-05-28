                                                    /* printing in javaScript */
console.log("Hello JS:");                                                                                       // ; is optional in JS 

/* 
    to run the program right click the intro.js & select Open in Integrated Terminal --> node intro.js
    node is a runtime environment 
*/

                                                /* ------ variables in JS ------ */
let a;                                                                                                          // declare variable
console.log(a);                                                                                                 // undefined; -> because it's the default value

/*
    variable types: 
        Primitive types: most atomic types -> number, string, boolean, null, symbol;  
            number -> only math number nothing like int or float. 5/2 is 2.5 not 2 here.
            string -> only string nothing like char.
*/




                                                    /* -------- Ref: -------- */
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