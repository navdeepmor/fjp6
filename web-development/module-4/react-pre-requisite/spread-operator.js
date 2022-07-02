                                                    /* ---- spread operator with array ---- */ 

let arr = [ 1, 2, 3];
let arr2 = arr;
arr2.push( 4 );                                                                                                       // value 4 is push in arr2
// console.log( arr );                                                                                                   // o/p: [1, 2, 3, 4]
// console.log( arr2 );                                                                                                  // o/p: [1, 2, 3, 4]
                                                    

/* 
          arr2 |   10k   |          |               |              |
           arr |   10k   |          |          10k  | [1, 2, 3, 4] |         
                ---------           |                --------------                    
                  stack             |                   heap
 */

let arr3 = [...arr];                                                                                                    // o/p: value of arr are spread i.e. 1 2 3 & later that is defined in arr 
arr3.push(4);                                                                                                 
// console.log(arr);                                                                                                       // o/p: [1, 2, 3]
// console.log(arr3);                                                                                                      // o/p: [1, 2, 3, 4] | here we can see there is no change in arr when we push a value in arr3 


/* 
          arr3 |   15k   |          |          15k  | [1, 2, 3, 4]  |
           arr |   10k   |          |          10k  | [1, 2, 3]     |         
                ---------           |                ---------------                     
                  stack             |                     heap
 */

                                                    /* ---- spread operator with object ---- */
let obj = {
  name: "Laalu",
  address: {
    country: "India",
    state: {
      code: "BH",
      pin: 466141
    }
  }
}

let obj2 = obj;
obj2.name = "Aalu";
// console.log( obj2 );                                                                                                       // o/p: ?
// console.log( obj );                                                                                                        // o/p: ?

/*    

                                    |               |  ---------------------   |
                                    |          20k  | |  code   : "BH"      |  |
                                    |               | |  pin    : 466141    |  |
                                    |               |  ---------------------   |
                                    |               |  ---------------------   |
                                    |          15k  | |  country: "India"   |  |
                                    |               | |  state  : 20k       |  |
               |         |          |               |  ---------------------   |
          obj2 |   10k   |          |               |  ---------------------   |
           obj |   10k   |          |          10k  | | name   : "Aalu"     |  |
                ---------           |               | | address: 15k        |  |         
                  stack             |               |  ---------------------   |               
                                    |                --------------------------     
                                                                heap
*/ 
                                                          /* ---- shallow copy ---- */
let obj3 = {...obj};                       
obj3.name = "Bhalu";
// console.log({ obj });
// console.log({ ...obj3 });

obj.address.country = "Nepal";
// console.log( obj );                                                                                        // o/p: ? | we expect that only obj will experiance the change 
// console.log( obj3 );                                                                                       // o/p: ?
                                                           /* ---- deep copy ---- */
let obj4 = {...obj, address: { ...obj.address }, state: {...obj.address.state}};                              // with : {} we defining it's value at new reference
 obj4.address.country = "Bangladesh";
// console.log( obj );
// console.log( obj4 );
                                                        /* ---- deep copy shotcut ---- */ 
let obj5 = JSON.parse(JSON.stringify(obj));                                                                   // string are constructed on stack therefor there is no reference to it
obj5.address.state.code = 'CG';

// console.log(obj);
// console.log(obj5);