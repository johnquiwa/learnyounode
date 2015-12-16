var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString();
var newLines = (str.split('\n').length - 1);
console.log(newLines);