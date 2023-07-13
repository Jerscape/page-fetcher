//imports
const request = require('request');
const fs = require('fs');

//create command line array to store recieved argumetns
//should be two, a url, and a local file path
const arguments = process.argv;
console.log(arguments)
console.log("element 2: " + arguments[2])
const url = arguments[2];
console.log(url)

//I guess I have to fetch it first based on the argumetns passed via the command line 

//I picked my companies url(?)
request(url, (error, response, body) => {
  console.log(body) //test to see if this works

});

//do I have to write the downloaded resource to a file in order to save it I guess?