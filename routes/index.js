var express = require('express');
var router = express.Router();

const index_controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

router.get('/index', index_controller.index);

module.exports = router;
