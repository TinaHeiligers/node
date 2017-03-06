var fs = require('fs');

module.exports = {

  echo: function(args){
    process.stdout.write(args);
    process.stdout.write("\nprompt > ");
  },
  
  pwd: function(file) {
    var path=process.cwd();
    process.stdout.write(path);
    process.stdout.write("\nprompt > ");
  },

  date: function(file) {
    var date=Date();
    process.stdout.write(date);
    process.stdout.write("\nprompt > ");
  },

  ls: function(file) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
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
  },
  wc: function(file) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataArr=data.toString().split("\n");
      var countlines = dataArr.length;
      
      process.stdout.write(String(countlines));
      process.stdout.write("\nprompt > ");
    });
  }
}