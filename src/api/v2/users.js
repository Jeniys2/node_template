let Promise = require('bluebird');

module.exports = (app, db) => {
    const getUsers = () => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users";
            db.query(query, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            })
        });
    };

    const getMap = () => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM map";
            db.query(query, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            })
        });
    };

    const getFull = () => {
        return Promise.props({
            users: getUsers(),
            map: getMap()
        }).then((result) => {
            return Promise.resolve(result);
        });
    };
    app.get('/users', function (req, res) {
        getFull().then((result) => {
            res.json(result);
        })
    });
};
