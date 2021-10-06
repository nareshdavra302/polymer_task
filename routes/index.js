var express = require('express');
var router = express.Router();
const getDataPromise = require('../getdata');

/* GET home page. */
router.get('/', async function (req, res, next) {
  //res.send(JSON.stringify({ test: 'working' }))
  let retries = 0;


  let data;
  do {
    try {
      data = await getDataPromise();
    } catch (error) {
      retries++;
    }
  } while (!data)
  res.send(JSON.stringify({ retries, data }));
});

module.exports = router;
