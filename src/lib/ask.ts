import inquirer = require('inquirer')


export default (prompts: Array<Object>): Function => {
  return (files: Object, metalsmith: any, done: Function) => {
    inquirer.prompt(prompts)
      .then((answer) => {
        // get answer and assign to metadata
        const metadata = metalsmith.metadata()

        Object.keys(answer)
          .forEach((key) => {
            metadata[key] = answer[key]
          })

        done()
      })

  }
}
