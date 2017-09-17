"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metalsmith_1 = require("metalsmith");
const ask_1 = require("./ask");
/**
 * compile the downloaded template and output to the dest dir
 */
exports.default = (src, dest) => {
    const metalsmith = metalsmith_1.default(src);
    metalsmith
        .use(askQuestions)
        .use();
};
function askQuestions() {
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
function compileTemplate() {
}
//# sourceMappingURL=generate.js.map