/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
var express = require('express');
var router = express.Router();
var employeeModel = require('../models/employeeSchema');


/* GET home page. */
router.get('/', function(req, res, next) {

    var id = req.query.idnumber;

    var output;
    employeeModel.find({id: id}, function(err, docs){

        console.log("found this docs: "+ docs);

        output =[
            {starttime: '0:00:00', endtime: '1:11:11', duration: '1:11', date: '3/1/16'},
            {starttime: '0:00:00', endtime: '1:11:11', duration: '1:11', date: '3/1/16'},
            {starttime: '0:00:00', endtime: '1:11:11', duration: '1:11', date: '3/1/16'}
        ];
        res.render('viewlog', {employeeID: id, employeeInfo: output});
    });


});

module.exports = router;
