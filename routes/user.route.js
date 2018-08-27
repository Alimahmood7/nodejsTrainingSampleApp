var router = require('express').Router();
var userController = require('../controllers').user;



router
  .route("/register")
  .post(userController.postUser)



module.exports = router;