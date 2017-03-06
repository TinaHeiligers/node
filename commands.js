var fs = require('fs');
module.exports = {
  pwd: function() {
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

    process.stdout.write('\nprompt > ');  
    });
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  }

}