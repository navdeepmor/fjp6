/* object --> key - value pair */
let obj = {};  // empty object
console.log(obj);

let personDetails = {
    Name: "Navdeep Mor", //key is consider as string by default therefore no need to define in string unless key name like "person Name"
    Age: 32,
    "phone No" : 9021550339,
    lastName: 'Mor'
};
console.log(personDetails);

let capAmerica = {
    Name: 'Steve',
    Age: 9999,
    isAvenger: false,
    Friends: ['Natasha', 'Thor', 'Tony', 'Bucky', 'Bruce'],
    address: {city:"Queens", state: 'Haryana'},
    sayHi: function(){
        console.log("Cap America says hi!!!");
    }
}
/* whole object */
console.log(capAmerica);
/* Name of capAmerica */
console.log(capAmerica.Name); // particular key access
/* address object */
console.log(capAmerica.address.city);
/* calling fun */
console.log(capAmerica.sayHi()); // without parantheses it will not print console like: sayHi
/* undefined key */ 
console.log(capAmerica.undefined_Key); // o/p: undefined but it will not throw any error

/* add a new key to object */
capAmerica.Movies = ['Avengers', 'Civil War', 'End Game'];
/* delete key */
delete capAmerica.Movies;

/* update value of key */
capAmerica.address.state = 'New York';

/* Second method to access a key */
console.log(capAmerica.Name); // by default after dot it consider it to be string i.e. means it's a key & then went for search
console.log(capAmerica['Name']); // but here we have to define it inside ' ' to tell that it's not a variable but a key like: console.log(capAmerica[Name]); gives error
