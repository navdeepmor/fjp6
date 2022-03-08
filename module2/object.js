/* object --> key - value pair */
let obj = {};  // empty object
console.log(obj);

let personDetails = {
    Name: "Navdeep Mor",
    Age: 32,
    "phone No" : 9021550339,
    lastName: 'Mor'
};
console.log(personDetails);

let capAmerica = {
    Name: 'Steve',
    Age: 9999,
    Friends: ['Natasha', 'Thor', 'Tony', 'Bucky', 'Bruce'],
    address: {city:"Queens", state: 'Haryana'},
    sayHi: function(){
        console.log("Cap America says hi!!!");
    }
}
console.log(capAmerica);

