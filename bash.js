var commands = require('./commands');

  var done=function(output) {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  var input = data.toString().trim();
  // var inputArr=input.split(" ");
  var inputArr = input.split(/\s*\|\s*/g); // any amount of whitespace, pipe, any amount of whitespace

  var cmd=inputArr.shift();//this needs to be refactored into a new, more compilcated parsed thing
  var args=inputArr.join(" ");//this needs to be refactored into a new, more compilcated parsed thing
  

  commands[cmd](args,done);    
});