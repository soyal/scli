/**
 * download the template and place it at path.join(os.homedir(), '.scli', ${templateType})
 */
import ora = require('ora')
import downloadGitRepo = require('download-git-repo')

/**
 * download the template from github project, and place it at dest
 * @param repo the repository in github, user/project
 * @param dest where the repository place
 */
export default function download(repo: string, dest: string): Promise<Function> {
  // start spinner
  const spinner = ora('downloading template').start()

  return new Promise((resolve, reject) => {
    downloadGitRepo(repo, dest, (err) => {
      spinner.succeed('template downloaded')
      
      if (err) reject(err)

      resolve()
    })
  })
}