var express = require('express');
var router = express.Router();

router.get('/popular', function(req, res, next) {
  res.send(["tt0076759", "tt0080684", "tt0086190"]);
});

module.exports = router;
