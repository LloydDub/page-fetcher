// request dls the file. fs.writeFile wrties to system\the call back is always the error. 
const request = require('request');
const fs = require("fs");

const file = process.argv[1];
const url = process.argv[2];
const path = "index.html";

request(url, (error, response, body) => {
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received  
   fs.writeFile(path, body, function(error) {
     if (error) {
      console.log('error:', error);
     }    
      console.log( `Downloaded and saved ${body.length} bytes to ./${path}` );
    })

});