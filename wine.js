var fs = require('fs'); 
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream(process.argv[2])
    .pipe(parse({delimiter: ':',quote: '',relax_column_count: true}))
    .on('data', function(csvrow) {
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      console.log(csvData);
      console.log(csvData[1])
      console.log(typeof csvData);
      var secondKey = Object.keys(csvData)[2];
      console.log(secondKey)

    });