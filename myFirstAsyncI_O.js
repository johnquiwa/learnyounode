var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
	if (err) {
		console.log(error.message);
	} else {
		var newLines = data.split('\n');
		console.log(newLines.length - 1);
	}
});