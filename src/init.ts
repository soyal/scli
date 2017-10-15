//scli init command

import commander = require('commander')
import inquirer = require('inquirer')
import log from './lib/log'
import download from './lib/download'
import generate from './lib/generate'
import path = require('path')
import os = require('os')
import config from './config'

commander
  .usage('<name> [project-name]')
  .parse(process.argv)


const args = commander.args

// no args, show help and exit
if (args.length === 0) {
  commander.help()
}


const SUPPORT_NAME = config.supportProjects
const name = args[0]  // template type, component or other
const projectName = args[1] || 'demo-template'  // target folder name, default: demo-template

// verify name
// it should only be component or project
if(SUPPORT_NAME.indexOf(name) === -1) {
  log.error(`> can only build ${SUPPORT_NAME.join(',')} template, but you input ${name}`)
}

// download and generate template
const cwd = process.cwd()
const home = os.homedir()
const templateRepo = `soyal/scli-${name}-template`
const scliTemplatePlace = path.join(home, `.scli/${name}`)

download(templateRepo, scliTemplatePlace)
  .then(() => {
    const targetPlace = path.join(cwd, projectName)

    return generate(scliTemplatePlace, targetPlace, name)
  })
  .then(() => {
    log.info(`> ${name} template build complete!`)
  })
  .catch((err) => {
    throw new Error(err)
  })
// generate(path.join(cwd, './test'), path.join(cwd, './test'), name, projectName)