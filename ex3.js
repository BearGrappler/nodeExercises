var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]); //readFileSynce was in Code School Intro to Node material

var stringBuf = buf.toString();

console.log(stringBuf.split("\n").length - 1 ) ;//convert to an array then count the length subtract one since we an extra