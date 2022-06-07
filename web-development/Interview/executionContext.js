/* How JS works? */  
/* JS - Synchronous, single thread */
/* top to bottom & left to right */

/* 1. memory allocate 2. then execution */
/* ec: execution context */ 
/* gec: global exection context */

/* ---------------------------------------------------------------- */

/* Q1. */
// var a = 10;

// function print(){
//     var b = 20;
//     console.log(b);
// }

// var c = 30;
/* Stack --> 1.gec 2.ec */
/* 1.gec: 1.memory allocate - a:undefined c:undefined print:8k print(){ - which will be defined in heap & contains address before print --> before execution */
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
/* Stack --> 1.gec 2.ec */
/* 1.gec: 1.memory allocate - print:undefined --> before execution */
/* error: print is not a function because it's undefined  */
/* ---------------------------------------------------------------- */
