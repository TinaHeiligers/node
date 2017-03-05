var fs = require('fs');

module.exports = {
  
  pwd: function() {
    // process.stdout.write('prompt(in pwd) > ');
    // process.stdin.on('data', function (data) {
      // var cmd = data.toString().trim();
      // if (cmd==="pwd"){
        var path=process.cwd();
        process.stdout.write(path);
        process.stdout.write("\nprompt > ");
      // }
    // });
  },

  date: function() {
    // process.stdin.on('data', function (data) {
    // var cmd = data.toString().trim(); // remove the newline
    // if (cmd==="date"){
      var date=Date();
      process.stdout.write(date);
      process.stdout.write("\nprompt > ");
    // }
  },

  ls: function() {
    // process.stdout.write('prompt > ');
    // process.stdin.on('data', function (data) {
      // var cmd = data.toString().trim();
      // if (cmd === "ls") {
        fs.readdir('.', function(err, files) {
          if (err) throw err;
          files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
          })
          process.stdout.write("prompt > ");
        });
      // }
    // });
  }
}