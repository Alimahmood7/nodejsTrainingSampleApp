var router = require('express').Router();
var baseController = require('../controllers').base;


router.use('/', function(req , res , next) {
  console.log('my middleware');
  console.log('req url is', req.url);  
  next();
});

router.route("/").get(function (req, res) {
    return res.send('HelloWorld');
});

router
  .route("/api/courses")
  .get(baseController.getCourses)

router
  .route("/api/courses/:id")
  .get(baseController.getCourse)

router
  .route("/api/course")
  .post(baseController.postCourse)

  router
  .route("/api/courses/:id")
  .put(baseController.updateCourse)

  router
  .route("/api/courses/:id")
  .delete(baseController.deleteCourse)

module.exports = router;