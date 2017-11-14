/*jshint esversion: 6 */
'use strict';

// APIs Endpoint

module.exports = function(app) {

    app.route('/v1/test')
        .get(function(req, res) {
            res.json({
                "message": "test mocker server run successfully"
            });
        });

    app.route('/v1/orderNotify/:groupId')
        .post(function(req, res) {
            res.json({
                "message": "test mocker server run successfully"
            });
        });

    app.route('/v1/statusChangeNotify/:groupId')
        .post(function(req, res) {
            res.json({
                "message": "test mocker server run successfully"
            });
        });

    app.route('/v1/statusCheck/:groupId')
        .get(function(req, res) {
            res.json({
                "message": "test mocker server run successfully"
            });
        });


};