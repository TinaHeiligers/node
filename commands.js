module.exports = {
  
  pwd: function() {
    process.stdout.write('prompt > ');
    
    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim();
      if (cmd==="pwd"){
        var path=process.cwd();
        process.stdout.write(path);
      }
    });
  },

  ls: function() {

    var fs = require('fs');
    //this does not work but it does seem to execute immediately and print to stdout all the files that are being loaded in this directory
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > in ls, executing immediately");
    });
  }
};