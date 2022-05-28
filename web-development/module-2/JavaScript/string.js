let str = "     I am string     ";
                                                                    /* sliced string */
let tmp = str.slice(2, 6);                                                                                      // extract part of a string
// console.log(tmp);
                                                                    /* replace method */
let replacedStr = str.replace("am", "was");                                                                     // replace a part with give word
// console.log(replacedStr);
str = str.trim();                                                                                               // it return the given after removing the starting and end spaces
let arrStr = str.split(" ");                                                                                    // split returns an array
console.log(arrStr);
let modifiedStr = arrStr.join("$");                                                                             // join the elements of arr with the string specified in it
console.log(modifiedStr);




                                                                   /* ------ Ref ------ */
let singleQuotes = 'single quotes ki string';
let doubleQuotes = 'double quotes ki string';

// console.log(singleQuotes);
// console.log(doubleQuotes);
let char  = singleQuotes.charAt(4);                                                                             // it will return char at 4th idx but that would be treated as string not char
let ascii = singleQuotes.charCodeAt(4);
let subStr = singleQuotes.substring(2, 3);
// console.log(char);
// console.log(ascii);
// console.log(subStr);