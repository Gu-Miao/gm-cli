const chalk = require('chalk')

function success(text) {
  console.log(`${chalk.hex('#4cd137')('SUCCESS')} ${text}`)
}

function warning(text) {
  console.log(`${chalk.hex('#fbc531')('WARNING')} ${text}`)
}

function error(text) {
  console.log(`${chalk.hex('#e84118')('ERROR')} ${text}`)
}

function info(text) {
  console.log(`${chalk.hex('#00a8ff')('INFO')} ${text}`)
}

module.exports = {
  success,
  warning,
  error,
  info,
  chalk
}
