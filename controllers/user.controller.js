var mongoose = require('mongoose');
var User = mongoose.model('User');
const bcrypt = require('bcrypt');
console.log("userController");
var postUser = function(req , res ) {
    console.log("user");
    if (!req.body.email) {
        res.status(400).send('Name is required');
        return;
    }
    let user =  User.findOne({email : req.body.email});
    if(user) return res.status(400).send('The user is already exist');
    user = new User({ 
       email: req.body.email,
       password:req.body.password
    });
   user.save(function (err) {
       if (err) return handleError(err);
       res.send(user);
   });

}

module.exports = {
    postUser: postUser,
}
