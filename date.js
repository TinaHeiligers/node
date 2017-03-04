module.exports = {
  date: function() {
    process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    if (cmd==="date"){
      var date=Date();
      process.stdout.write(date);
    }

    // process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

    });    
  }
};

