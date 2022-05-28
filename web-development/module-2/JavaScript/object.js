/* 
    object -> group of key : value pair 
        key :  value     -> property
        key :  function  -> method
*/
let obj = {};                                                                                       // empty object
console.log(obj);

let capAmerica = {
    name: 'Steve',
    age: 9999,
    isAvenger: false,
    friends: ['Natasha', 'Thor', 'Tony', 'Bruce', 'Peter'],
    address: { 
        city:"Manhatten", 
        state: 'New York' 
    },
    sayHi: function(){
        console.log("Cap say's hi");
    }
}
                                                                /* whole object */
console.log("cap:", capAmerica);
console.log(capAmerica.name);                                                                       // particular key access
console.log(capAmerica.address.city);                                                               // address object 
console.log(capAmerica.sayHi());                                                                    // calling fun 
                                                                                                    // without parantheses it will not print console like: sayHi

                                                                /* undefined key */ 
console.log(capAmerica.undefined_Key);                                                              // o/p: undefined but it will not throw any error
                                                            /* add a new key to object */
capAmerica.movies = ['Avengers', 'Civil War', 'End Game'];
                                                                 /* delete key */
delete capAmerica.movies;
                                                             /* update value of key */
capAmerica.address.state = 'New York';
                                                          /* Second method to access a key */
console.log(capAmerica.name);                                                                       // by default after dot it consider it to be string i.e. means it's a key & then went for search
console.log(capAmerica['name']);                                                                    // but here we have to define it inside ' ' to tell that it's not a variable but a key like: console.log(capAmerica[Name]); gives error. let propKey = "age"; console.log(capAmerica[propKey]); // here without ' ' it will consider it as variable. First it will put it key inside it like: console.log(["age"]);. And then search it in obj.
console.log(capAmerica['address']['city']);

                                                              /* looping through obj */
for(let key in capAmerica){
    console.log(key, " : ", capAmerica[key]);
}



                                                              /* ------ Ref ------ */

let personDetails = {
    name: "Navdeep Mor",                                                                            //key is consider as string by default therefore no need to define in string unless key name like "person Name"
    age: 23,
    "phone No" : 9021550339,
    lastName: 'Mor'
};
console.log(personDetails);