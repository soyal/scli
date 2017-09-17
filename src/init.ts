//scli init 命令

import commander = require('commander')
import inquirer = require('inquirer')
import log from './lib/log'
import generate from './lib/generate'
import path = require('path')

commander
  .usage('<name> [project-name]')
  .parse(process.argv)


const args = commander.args

// no args, show help and exit
if (args.length === 0) {
  commander.help()
}


const SUPPORT_NAME = ['component']
const name = args[0]  // template type, component or other
const projectName = args[1] || 'component-template'  // target folder name

// verify name
// it should only be component/project
if(SUPPORT_NAME.indexOf(name) === -1) {
  log.error(`can only build ${SUPPORT_NAME.join(',')} template, but you input ${name}`)
}


const cwd = process.cwd()
generate(path.join(cwd, './test'), path.join(cwd, './test'), name, projectName)