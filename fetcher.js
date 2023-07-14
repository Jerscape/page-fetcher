//imports
const request = require('request');
const fs = require('fs');

//create command line array to store recieved argumetns
//should be two, a url, and a local file path
const arguments = process.argv;
console.log(arguments)
console.log("element 2: " + arguments[2])
const url = arguments[2];
const localFilePath = arguments[3];
//console.log(url)

//I guess I have to fetch it first based on the argumetns passed via the command line 

//I picked my companies url(?)
const {body} = request(url, (error, response, body) => {
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }

    fs.stat(localFilePath, (err,stats) => {
      if(err){
        console.log("ERROR: " + err)

      } else {
        let size = stats.size //returning null
        let name = stats.name
        console.log(`Downloaded and saved ${size} bytes to ${localFilePath}`) //returning cannot read size of null
      }


    })
    
  });

});


//console.log("TESTING BODY" + body) 



//write to file?

//do I have to write the downloaded resource to a file in order to save it I guess?