
var commands = require('./commands');

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  //for cat and head will need to split on spaces
  //first thing will be the cmd
  //after that will be params
  //echo' jsut going to return the users input as is
  // for cat, head and tail, use fs.readFile()
  // cat prints whole file
  // head and tail prints first/last 5 lines
  commands[cmd]();    
});

// var userCommand = 'pwd';
// commands[userCommand]();

// var userComLS = 'ls';
// commands[userComLS]();

// var date = require('./date');
// var userComDate = 'date';
// date[userComDate]();



// // Output a prompt
// process.stdout.write('prompt > ');
// //console.log(Object.keys(process));
// // The stdin 'data' event fires after a user types in a line


// node-shell git:(master) cat bash.js
// converts everything in the file to a string and prints those out, with a '%' at the end

// ➜  node-shell git:(master) head bash.js
// /prints only first 10 lines, with a '%' at the end
