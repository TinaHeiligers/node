const chalk = require('chalk');

const prompt = chalk.blue('\nprompt > ');

process.stdout.write(prompt);
process.stdin.on('data', function(data) {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') process.stdout.write(process.cwd());
  else if (cmd === 'date') process.stdout.write(Date());
  else process.stdout.write(chalk.red('command not found: ') + cmd);

  process.stdout.write(prompt);

});