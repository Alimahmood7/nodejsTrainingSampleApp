

var express = require('express');
var router = express.Router();

var baseRouter = require('./base.routes.js');
var userRouter = require('./user.route.js');

router.use(baseRouter);
router.use('/api/user', userRouter)

module.exports = router;