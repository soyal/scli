"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
exports.default = (prompts) => {
    return (files, metalsmith, done) => {
        inquirer.prompt(prompts)
            .then((answer) => {
            // get answer and assign to metadata
            const metadata = metalsmith.metadata();
            Object.keys(answer)
                .forEach((key) => {
                metadata[key] = answer[key];
            });
            done();
        });
    };
};
//# sourceMappingURL=ask.js.map