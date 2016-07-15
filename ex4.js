var fs = require('fs');

fs.readFile(process.argv[2], function(error,contents){
	buf = contents;
	stringBuf = buf.toString();
	console.log(stringBuf.split("\n").length - 1 ); //convert to an array then count the length subtract one since we an extra
}) 
