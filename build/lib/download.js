"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * download the template and place it at path.join(os.homedir(), '.scli', ${templateType})
 */
const ora = require("ora");
const downloadGitRepo = require("download-git-repo");
const fs = require("fs");
const log_1 = require("./log");
/**
 * download the template from github project, and place it at dest
 * @param repo the repository in github, user/project
 * @param dest where the repository place
 */
function download(repo, dest) {
    // start spinner
    const spinner = ora('downloading template').start();
    return new Promise((resolve, reject) => {
        // has the template downloaded
        try {
            fs.statSync(dest);
            // template exist
            spinner.stop();
            log_1.default.info('> load template from cache');
            resolve();
            return;
        }
        catch (e) {
            // error throwed, means the template has never downloaded, do download action
            downloadGitRepo(repo, dest, (err) => {
                spinner.succeed('template downloaded');
                if (err)
                    reject(err);
                log_1.default.info(`> template has downloaded and place at ${dest}`);
                resolve();
            });
        }
    });
}
exports.default = download;
//# sourceMappingURL=download.js.map