"use strict";
//scli init 命令
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
commander
    .usage('<name> [project-name]')
    .parse(process.argv);
const args = commander.args;
// no args, show help and exit
if (args.length === 0) {
    commander.help();
}
const name = args[0];
const projectName = args[1];
//# sourceMappingURL=init.js.map