/**
 * compile the template
 */
import consolidate = require('consolidate')
import async = require('async')
import ora = require('ora')

const render = consolidate.handlebars.render


export default function template(): Function {
  return (files: any, metalsmith: any, done: Function) => {
    const metadata = metalsmith.metadata()

    compileTemplates(files, metadata, done)
  }
}

async function compileTemplates(files: Object, metadata: Object, cb: Function) {
  const fileKeys = Object.keys(files)
  const spinner = ora('start to compile template...').start()

  for(let fileKey of fileKeys) {
    const originStr = files[fileKey].contents.toString()
    await new Promise((resolve) => {
      render(originStr, metadata, (err, res) => {
        if(err) {
          throw new Error(err.toString())
        }

        files[fileKey].contents = new Buffer(res)
        resolve()
      })
    }) 

  }

  spinner.succeed('template compile success')
  cb()
}