var express = require('express');
const crypto = require('crypto');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demo'
});
connection.connect();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', function (req, res, next) {
    var data = req.body;
    connection.query("SELECT * from userdata WHERE email = '" + data.email + "'" + "and password = '" + data.password + "'", function (error, results, fields) {
        if (error) throw error;
        if (!results.length) {
            res.json({ status: 0, message: 'Login Failed , email or password is incorrect' });
        } else {
            res.json({ status: 1, message: 'Login Success', info: results[0] });
        }
    });
})

router.post('/register', function (req, res, next) {
    var data = req.body;
    connection.query("SELECT email from userdata WHERE email = '" + data.email + "'", function (error, results, fields) {
        if (error) throw error;
        if (!results.length) {
            connection.query('INSERT INTO userdata(firstName,lastName,password,email,role) VALUES(?,?,?,?,?)', [data.firstName, data.lastName, data.password, data.email, data.role], function (err, result) {
                if (err) {
                    console.log('[INSERT ERROR] - ', err.message);
                    return;
                }
                res.json({ status: 1, message: 'Registeration Success' });
            });
        } else {
            res.json({ status: 0, message: 'Registeration Failed , email already exist' });
        }
    });
})

module.exports = router;
