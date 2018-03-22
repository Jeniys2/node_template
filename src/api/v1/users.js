let Promise = require('bluebird');
let mysql = require('mysql');
let Validator = require('../../libs/validator');
const TABLE = "users";
module.exports = (app, db) => {
    app.get('/users', (req, res) => {
        let page = req.query.page || 1;
        let per = req.query.per || 10;
        list(page, per).then((data) => {
            res.json({
                data: data
            });
        }).catch((err) => {
            res.json({
                error: {
                    message: err
                }
            });
        });
    });

    app.post('/user', (req, res) => {
        let user = req.body;
        let rules = {
            name: 'required'
        };
        let check = Validator(user, rules);
        if (!check) {
            add(user).then((id) => {
                res.json({id: id});
            }).catch((err) => {
                res.json({
                    error: {
                        message: err
                    }
                });
            });
        }
        else {
            res.json({
                error: {
                    message: 'Wrong format',
                    details: check
                }
            });
        }
    });

    app.put('/user/:id', (req, res) => {
        let id = req.params.id;
        let user = req.body;
        user.id = id;
        let rules = {
            id: 'required|integer',
            name: 'required'
        };
        let check = Validator(user, rules);
        if (!check) {
            delete user['id'];
            update(id, user).then((id) => {
                res.json({id: id});
            }).catch((err) => {
                res.json({
                    error: {
                        message: err
                    }
                });
            });
        }
        else {
            res.json({
                error: {
                    message: 'Wrong format',
                    details: check
                }
            });
        }
    });

    const list = (page, per) => {
        return new Promise((resolve, reject) => { // Nên dùng promise để tránh một số lỗi
            let offset = (page - 1) * per;
            let query = `SELECT * FROM ${TABLE} LIMIT ${per} OFFSET ${offset}`;
            db.query(query, (err, result) => {
                if (err) return reject(err.sqlMessage);
                resolve(result);
            });
        });
    };
    const add = (user) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO ${TABLE} SET ?`, user, (err, result) => {
                if (err) return reject(err.sqlMessage);
                resolve(result.insertId);
            });
        });
    };
    const update = (id, user) => {
        return new Promise((resolve, reject) => {
            let query = `UPDATE ${TABLE} SET ? WHERE id = ?`;
            db.query(mysql.format(query, [user, id]), user, (err, result) => {
                if (err) return reject(err.sqlMessage);
                if(result.affectedRows === 0)
                    return reject("The record does not exist")
                resolve(id);
            });
        });
    };
};
