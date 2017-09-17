"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consolidate = require("consolidate");
const async = require("async");
const render = consolidate.handlebars.render;
function template(src, dest) {
    return (files, metalsmith, done) => {
        const metadata = metalsmith.metadata();
        const fileKeys = Object.keys(files);
        const run = (fileKey, next) => {
            const str = files[fileKey].contents.toString();
            render(str, metadata, (err, res) => {
                if (err) {
                    next();
                }
                files[fileKey].contents = new Buffer(res);
                next();
            });
        };
        async.each(fileKeys, run, done);
    };
}
//# sourceMappingURL=template.js.map