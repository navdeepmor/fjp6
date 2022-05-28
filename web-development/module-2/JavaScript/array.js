let arr = [];                                                                                                  // array declare
console.log(arr);
                                                            /* array with elements */
let arr2 = [19, 3, -1, "I am string", 'e', false, 6.982];
// console.log(elementArr);
// console.log("element at 6th index "+elementArr[6]);
arr2[1] = "Nothing";                                                                                            // replaces element at index 1
                                                              /* arrays method */
arr2.push("new item");                                                                                          // push method add element at last
// console.log(elementArr);
arr2.pop();                                                                                                     // pop
arr2.shift();                                                                                                   // remove element from start of array
arr2.unshift("Add me at beginning");                                                                            //add elements at start of array
// console.log(elementArr)
let partOfAnArr = arr2.slice(1, 5);                                                                             // in arg we need to specify starting idx, ending idx but it will return an arr which contains elements from start idx till end idx - 1. In case if we give only staring idx then it will return all elements from specified start idx till end.
// console.log(partOfAnArr);
arr2.splice(2, 1);                                                                                              // delete one element from second idx 
// index of  // contain