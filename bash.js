// Output a prompt
process.stdout.write('prompt > ');
//console.log(Object.keys(process));
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd==="pwd"){
    var path=process.cwd();
    //console.log(path);
    process.stdout.write(path);
  }
  else if (cmd==="date"){
    var date=Date();
    process.stdout.write(date);
  }

  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write('\nprompt > ');

});