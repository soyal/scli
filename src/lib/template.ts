import consolidate = require('consolidate')
import async = require('async')

const render = consolidate.handlebars.render


function template(src: String, dest: String): Function {
  return (files: any, metalsmith: any, done: Function) => {
    const metadata = metalsmith.metadata()
    const fileKeys = Object.keys(files)

    const run = (fileKey: string, next: Function) => {
      const str = files[fileKey].contents.toString()
      render(str, metadata, (err: Object, res: string) => {
        if(err) {
          next()
        }

        files[fileKey].contents = new Buffer(res)
        next()
      })
    }

    async.each(fileKeys, run, done)
  }
}