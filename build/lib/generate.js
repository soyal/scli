"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * generate template
 */
const Metalsmith = require("metalsmith");
const ask_1 = require("./ask");
const template_1 = require("./template");
const path = require("path");
const log_1 = require("./log");
/**
 * compile the downloaded template and output to the dest dir
 */
exports.default = (src, dest, typeName, projectName) => {
    const metalsmith = Metalsmith(src);
    metalsmith
        .use(askQuestions(typeName))
        .use(template_1.default())
        .source('template')
        .destination(path.join(dest, projectName))
        .build((err, files) => {
        if (err) {
            // log.error('error: build error, ' + err.toString())
            throw new Error(err);
        }
        log_1.default.info('complete');
    });
};
function askQuestions(name) {
    return ask_1.default([
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
    ]);
}
//# sourceMappingURL=generate.js.map