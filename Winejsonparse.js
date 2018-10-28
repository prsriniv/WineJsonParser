var fs = require('fs'); 

var json = []
var i = 0;

var parsedData = JSON.parse(process.argv[2], function (key, value) {
    if(key == "description") {
      json.push(value)
    }
       i++;
                    
  });

console.log(json);