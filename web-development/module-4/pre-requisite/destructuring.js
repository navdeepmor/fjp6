                                                      /* ----- destructuring in array ----- */
let arr = ["hey", "this", "is", "Lalu"];

let _str1 = arr[0];
let _str2 = arr[1];
// console.log(_str1,_str2);

let [str1, str2, str3, str4] = arr;
// console.log(str1, str2, str3, str4);

let [str1_, str2_, ,str3_] = arr;                                                                                   // when we need to skip a value in between
// console.log(str1_, str2_, str3_);                                                                                       

let [str_1, str_2, str_3, str_4, extra] = arr;                                                                      // arr has only 4 elements in it so when we destructure it in 5 variable i.e. one extra var then?
// console.log(str_1, str_2, str_3, str_4, extra);                     
let [str1__, str2__, str3__, str4__, extra1='Golu'] = arr;                                                          // assigning default value to extra1 var 

                                                      /* ----- destructuring in object ----- */
let obj = {
    name: "Aalu",
    state: "Delhi",
    country: "India"
}
// let name = obj.name;
// let state = obj["state"];
// console.log(name, state);

// let { name, state, country } = obj;                                                                                   // let { name_, state_, country_ } = obj;  console.log(name_, state_, country_);  o/p: undefined undefined undefined | here we have to use same name as the obj key are defined
// console.log(name, state, country);

// let { name, state, country, extra2="here comes the default value" } = obj;
// console.log(name, state, country, extra2);                                                                           // o/p: ?

// let { name: firstname, state, country } = obj;                                                                          // to give different name to a variable
// console.log(firstname, state, country);


let obj2 = {
    name: "Papu",
    address: {
        country: "India",
        state: {
            code: "DL",
            pin: "111111"
        }
    }
}
let { name } = obj2;
// console.log(name);

// let { address: { country } } = obj2;                                                                               // let { address: { country: xyz } } = obj2;  console.log(xyz);
// console.log(country);

let { address: { state: { code } } } = obj2;
console.log(code);