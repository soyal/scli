//scli init 命令

import commander = require('commander')

commander
  .usage('<name> [project-name]')
  .parse(process.argv)


const args = commander.args

// no args, show help and exit
if(args.length === 0) {
  commander.help()
}


const name = args[0]
const projectName = args[1]

