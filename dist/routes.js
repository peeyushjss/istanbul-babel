/*jshint esversion: 6 */

'use strict';

// APIs Endpoint

module.exports = function (app) {

    app.route('/v1/orderNotify/:groupId').get(function (req, res) {
        res.json({ "message": "test mocker server run successfully" });
    });
};