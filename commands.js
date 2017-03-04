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
  }
};