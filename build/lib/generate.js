"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * generate template
 */
const Metalsmith = require("metalsmith");
const ask_1 = require("./ask");
const template_1 = require("./template");
/**
 * compile the downloaded template and output to the dest dir
 */
exports.default = (src, dest, typeName) => {
    return new Promise((resolve, reject) => {
        const metalsmith = Metalsmith(src);
        metalsmith
            .use(askQuestions(typeName))
            .use(template_1.default())
            .source('.')
            .destination(dest)
            .build((err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
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
            name: 'description',
            message: 'input description:',
            default: ' '
        },
        {
            type: 'input',
            name: 'author',
            message: 'input author:'
        }
    ]);
}
//# sourceMappingURL=generate.js.map