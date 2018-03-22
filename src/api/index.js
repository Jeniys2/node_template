let express = require('express');
let fs = require("fs");
module.exports = (app, db) => {
    fs.readdirSync(__dirname)
        .forEach((item) => {
            if (item.indexOf(".") === -1) {
                fs.readdirSync(__dirname + '/' + item).forEach((file) => {
                    let module = require(__dirname + '/' + item + '/' + file);
                    let router = express.Router();
                    module(router, db);
                    app.use('/' + item, router);
                })
            }
        });
};
