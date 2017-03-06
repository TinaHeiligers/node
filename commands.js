var fs = require('fs');
var request = require('request');
//var done = require('./bash');
//module.exports = {

//};

module.exports = {

  echo: function(args,done){
    done(args);
  },
  
  pwd: function(file,done) {
    var path=process.cwd();
    done(path);
  },

  date: function(file,done) {
    var date=Date();
    done(date);
  },

  ls: function(file,done) {
    var list="";
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        list+=file.toString() + "\n";
      })
      done(list);
    });
  },

  cat: function(file,done) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },

  head: function(file,done) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataArr=data.toString().split("\n");
      done(dataArr.slice(0,5).join("\n"));
    });
  },

  tail: function(file,done) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataArr=data.toString().split("\n");
      var end=dataArr.length;
      var start=end-5;
      done(dataArr.slice(start,end).join("\n"));
    });
  },
  wc: function(file,done) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataArr=data.toString().split("\n");
      var countlines = dataArr.length;
      
      done(String(countlines));
    });
  },
  curl: function(url,done) {
    //we haven't hardcoded the full url in here, we assume the user will type in the full request.
    var request = require('request');
    request(url, function(error, response, body) {
      done(body);
    });
  }
}