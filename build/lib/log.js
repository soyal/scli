"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const log = console.log;
exports.default = {
    error: (msg) => {
        log(chalk.red(msg));
        process.exit();
    },
    info: (msg) => {
        log(chalk.green(msg));
    },
    warn: (msg) => {
        log(chalk.yellow(msg));
    }
};
//# sourceMappingURL=log.js.map