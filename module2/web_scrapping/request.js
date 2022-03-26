/* npm(node package manager) - is like a playstore */

/* npm i request */

const request = require("request");

/* callback - Can we pass fun as argument to in other fun?YES */

request('http://www.google.com', function (error, response, body) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    } else {
        console.log('body:', body); // Print the HTML for the Google homepage.
    }
});
