import chalk from 'chalk'

const log = console.log

export default {
  error: (msg: string) => {
    log(chalk.red(msg))
    process.exit()
  },

  info: (msg: string) => {
    log(chalk.green(msg))
  },

  warn: (msg: string) => {
    log(chalk.yellow(msg))
  }
}