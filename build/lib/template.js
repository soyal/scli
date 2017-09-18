"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * compile the template
 */
const consolidate = require("consolidate");
const ora = require("ora");
const render = consolidate.handlebars.render;
function template() {
    return (files, metalsmith, done) => {
        const metadata = metalsmith.metadata();
        compileTemplates(files, metadata, done);
    };
}
exports.default = template;
function compileTemplates(files, metadata, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileKeys = Object.keys(files);
        const spinner = ora('start to compile template...').start();
        for (let fileKey of fileKeys) {
            const originStr = files[fileKey].contents.toString();
            yield new Promise((resolve) => {
                render(originStr, metadata, (err, res) => {
                    if (err) {
                        throw new Error(err.toString());
                    }
                    files[fileKey].contents = new Buffer(res);
                    resolve();
                });
            });
        }
        spinner.succeed('template compile success');
        cb();
    });
}
//# sourceMappingURL=template.js.map