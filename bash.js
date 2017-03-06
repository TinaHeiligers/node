var commands = require('./commands');

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  var input = data.toString().trim();
  var inputArr=input.split(" ");
  var cmd=inputArr.shift();
  var args=inputArr.join(" ");
  //for cat and head will need to split on spaces
  //first thing will be the cmd
  //after that will be params
  //echo' jsut going to return the users input as is
  // for cat, head and tail, use fs.readFile()
  // cat prints whole file
  // head and tail prints first/last 5 lines
  commands[cmd](args);    
});