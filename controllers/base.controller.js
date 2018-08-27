var mongoose = require('mongoose');
var Course = mongoose.model('Course');
var Author = mongoose.model('Author');

var getCourses = function (req, res) {
    var query = {};
    const pageNumber = 1;
      const pageSize = 10;
    Course
       //.find({author : /^mosh/}) start with mosh
       //.find({author : /hemadani$/i}) end with hemadani
      //.find({author : /.*mosh.*/}) contauins mosh       
        .find(query)
       // .skip((pageNumber -1 ) * pageSize)  // pagination
       // .limit(pageSize)
        .select('name author')
        .populate('author' , 'name -_id ' ) // populate other document
        .sort( {name : 1})
      // .count()  // for counting document length
        .exec(function (err, courses) {
            console.log(courses);
            if (err) {
                return res
                    .status(500)
                    .json({
                        message: err
                    });
            }
            return res
                .status(200)
                .json(courses);
        });
}

var getCourse = function (req, res) {
    Course.findById(req.params.id , (err , course) => {
           console.log(course);
           if(err) res.status(404).send('the course is not find ');
           res.send(course);
    });
    
}

var postCourse = function (req, res) {
     if (!req.body.name) {
         res.status(400).send('Name is required');
         return;
     }
    var course = new Course({ 
        name: req.body.name,
        author: '5b2a8080a3691c1705fa85d0',
        isPublished: true
     });
    course.save(function (err) {
        if (err) return handleError(err);
        res.send(course);
    });
    // var author = new Author({
    //     name: 'mosh',
    //     website : 'mosh@gmail.com'
    // });
    // author.save(function(err) {
    //       res.send(author);
    // });
}


var updateCourse = function (req, res) {
    Course.findByIdAndUpdate
    (
        req.params.id,
        req.body,
        {new: true}, 
        (err , course) => {
       res.status(200).send(course);   
    });
}

var deleteCourse = function (req, res) {
    Course.findByIdAndRemove(req.params.id, (err, course) => {
           if (err) res.status(404).send('the course is not find ');
           return res.status(200).send(course);
    });
}

module.exports = {
    getCourses: getCourses,
    getCourse: getCourse,
    postCourse: postCourse,
    updateCourse: updateCourse,
    deleteCourse: deleteCourse
}
