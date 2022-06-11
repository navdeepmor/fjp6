                                                            /* ----- map fn ----- */    
let arr = [1, 2, 3, 4];
let narr = arr.map(val => val*2);                                                                               // for(let i = 0; i < arr.length; i++){ narr[i] = arr[i]; }   |   let narr = arr.map((val, idx) => { return val * 2; });

                                                           /* ----- filter fn ----- */
let arr_ = [ "Lalu Yadav", "Nitish Kumar", "Rabadi Devi", "Aalu Yadav", "Rahul" ]
let arr2 = arr_.filter(function ( str ){                                                                        // let arr2 = arr_.filter((str) => { return str.length > 5 });   |   let arr2 = arr_.filter((str) => cb(str));  function cb(str) { return str.length > 6; }  
    return str.length > 6
})  
// console.log(arr2);




                                                             /* ----- Ref ----- */
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array