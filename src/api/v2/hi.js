module.exports = (app) => {
    app.get('/hi', function (req, res) {
        res.send('Hi');
        // {
        //     "error": {
        //     "message": "Invalid OAuth access token.",
        //         "type": "OAuthException",
        //         "code": 190,
        //         "fbtrace_id": "FKFIOsFFjuA"
        // }
        // }
        // {
        //     "created_time": "2014-11-26T00:10:16+0000",
        //     "message": "Node.js c\u0103n b\u1ea3n. Th\u1ef1c ra c\u00f2n ph\u1ea3i \u0111\u1ed9 8 slide nh\u01b0 th\u1ebf n\u00e0y m\u1edbi qua h\u1ebft ph\u1ea7n c\u0103n b\u1ea3n. Th\u00f4i xem t\u1ea1m \u0111\u1ec3 l\u1eadp tr\u00ecnh nh\u00e9\nhttp://techmaster.vn/2014/11/node-js-can-ban/",
        //     "id": "224779447588038_803888676343776"
        // }

    });
};
