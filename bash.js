var commands = require('./commands');
var userCommand = 'pwd';
commands[userCommand]();

var date = require('./date');
var userComDate = 'date';
date[userComDate]();

// // Output a prompt
// process.stdout.write('prompt > ');
// //console.log(Object.keys(process));
// // The stdin 'data' event fires after a user types in a line


// node-shell git:(master) cat bash.js
// converts everything in the file to a string and prints those out, with a '%' at the end

// ➜  node-shell git:(master) head bash.js
// /prints only first 10 lines, with a '%' at the end
