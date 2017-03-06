var fs = require('fs');

module.exports = {

  echo: function(args){
      process.stdout.write(args);
      process.stdout.write("\nprompt > ");


  },
  
  pwd: function(file) {
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

  date: function(file) {
    // process.stdin.on('data', function (data) {
    // var cmd = data.toString().trim(); // remove the newline
    // if (cmd==="date"){
      var date=Date();
      process.stdout.write(date);
      process.stdout.write("\nprompt > ");
    // }
  },

  ls: function(file) {
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
  },

  cat: function(file) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    });
  },

  head: function(file) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataArr=data.toString().split("\n");
      process.stdout.write(dataArr.slice(0,5).join("\n"));
      process.stdout.write("\nprompt > ");
    });
  },

  tail: function(file) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataArr=data.toString().split("\n");
      var end=dataArr.length;
      var start=end-5;
      process.stdout.write(dataArr.slice(start,end).join("\n"));
      process.stdout.write("\nprompt > ");
    });
}


}