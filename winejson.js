var fs = require('fs'); 
var csvjson = require('csvjson');
var csvWriter = require('json2csv')
const child_process = require('child_process')

var json = []
var searchString = process.argv[3]
var data = fs.readFileSync((process.argv[2]), { encoding : 'utf8'});
var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };

json = csvjson.toObject(data, options);
var field = "Count of "+process.argv[3];

for ( var i in json) {
    var count = 0;
    var id = json[i].description;
    var num = json[i].Sno;
    //console.log(id);
    console.log(num);

    var rgxp = new RegExp(process.argv[3], "g");
    var count = (id.match(rgxp) || []).length;
    console.log("Count : "+count);
    json[i][field] = count;
}
let jsonfile = JSON.stringify(json);
  fs.writeFileSync('modified.json', jsonfile);
  child_process.execSync('json2csv -i modified.json -o modified.csv')
  child_process.execSync('open modified.csv')
