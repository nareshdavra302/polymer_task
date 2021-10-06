var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(`<script>for(let i=0;i<50;i++){ fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(data => console.log(data));}</script><h1>see the output in developer console</h1>`);
});

module.exports = router;
