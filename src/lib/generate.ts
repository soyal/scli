import Metalsmith from 'metalsmith'
import ask from './ask'


/**
 * compile the downloaded template and output to the dest dir
 */
export default (src: string, dest: string): void => {
  const metalsmith = Metalsmith(src)

  metalsmith
    .use(askQuestions)
    .use()
}


function askQuestions() {
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
      name: 'author',
      message: 'input author:'
    }
  ])
}


function compileTemplate() {

}