"use strict";
//scli init command
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const log_1 = require("./lib/log");
const download_1 = require("./lib/download");
const generate_1 = require("./lib/generate");
const path = require("path");
const os = require("os");
const config_1 = require("./config");
commander
    .usage('<name> [project-name]')
    .parse(process.argv);
const args = commander.args;
// no args, show help and exit
if (args.length === 0) {
    commander.help();
}
const SUPPORT_NAME = config_1.default.supportProjects;
const name = args[0]; // template type, component or other
const projectName = args[1] || 'demo-template'; // target folder name, default: demo-template
// verify name
// it should only be component or project
if (SUPPORT_NAME.indexOf(name) === -1) {
    log_1.default.error(`> can only build ${SUPPORT_NAME.join(',')} template, but you input ${name}`);
}
// download and generate template
const cwd = process.cwd();
const home = os.homedir();
const templateRepo = `soyal/scli-${name}-template`;
const scliTemplatePlace = path.join(home, `.scli/${name}`);
download_1.default(templateRepo, scliTemplatePlace)
    .then(() => {
    const targetPlace = path.join(cwd, projectName);
    return generate_1.default(scliTemplatePlace, targetPlace, name);
})
    .then(() => {
    log_1.default.info(`> ${name} template build complete!`);
})
    .catch((err) => {
    throw new Error(err);
});
// generate(path.join(cwd, './test'), path.join(cwd, './test'), name, projectName) 
//# sourceMappingURL=init.js.map