var express = require('express');
var router = express.Router();
var carModel = require('../models/cars');

/* GET users listing. */
router.get('/', function(req, res, next) {
  carModel.getCars((err, data) => {
    res.json(data);
  });
});

module.exports = router;
