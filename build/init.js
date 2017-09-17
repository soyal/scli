"use strict";
//scli init 命令
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const log_1 = require("./lib/log");
const generate_1 = require("./lib/generate");
const path = require("path");
commander
    .usage('<name> [project-name]')
    .parse(process.argv);
const args = commander.args;
// no args, show help and exit
if (args.length === 0) {
    commander.help();
}
const SUPPORT_NAME = ['component'];
const name = args[0]; // template type, component or other
const projectName = args[1] || 'component-template'; // target folder name
// verify name
// it should only be component/project
if (SUPPORT_NAME.indexOf(name) === -1) {
    log_1.default.error(`can only build ${SUPPORT_NAME.join(',')} template, but you input ${name}`);
}
const cwd = process.cwd();
generate_1.default(path.join(cwd, './test'), path.join(cwd, './test'), name, projectName);
//# sourceMappingURL=init.js.map