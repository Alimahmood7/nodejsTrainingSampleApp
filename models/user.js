var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
    {
        email:
            {
                type: String,
                unique:true
            },
        password:
        {
            type:String,
        }

    }
);
mongoose.model('User', userSchema);