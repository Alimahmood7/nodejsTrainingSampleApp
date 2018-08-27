var mongoose = require('mongoose');
var courseSchema = new mongoose.Schema(
    {
        name:
            {
                type: String
            },
        bio:
            {
                type: String
            },
        website:
            {
                type: String
            }

    }
);
mongoose.model('Author', courseSchema);