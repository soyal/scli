/**
 * generate template
 */
import Metalsmith = require('metalsmith')
import ask from './ask'
import template from './template'
import path = require('path')
import log from './log'


/**
 * compile the downloaded template and output to the dest dir
 */
export default (src: string, dest: string, typeName: string): Promise<Function> => {
  return new Promise((resolve, reject) => {
    const metalsmith = Metalsmith(src)

    metalsmith
      .use(askQuestions(typeName))
      .use(template())
      .source('.')
      .destination(dest)
      .build((err, files) => {
        if(err) {
          reject(err)
          return
        }

        resolve()
      })
  })
}


function askQuestions(name: string) {
  return ask([
    {
      type: 'input',
      name: 'componentName',
      message: `input ${name} name:`
    },
    {
      type: 'input',
      name: 'version',
      message: 'input version:',
      default: '1.0.0'
    },
    {
      type: 'input',
      name: 'descrition',
      message: 'input description:',
      default: ' '
    },
    {
      type: 'input',
      name: 'author',
      message: 'input author:'
    }
  ])
}
