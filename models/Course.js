var mongoose = require('mongoose');
var courseSchema = new mongoose.Schema(
    {
        name:
            {
                type: String
            },
        author:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Author'
            },
        isPublished:
            {
                type: Boolean
            },
        tags:
            {
                type: Array
            }

    }
);
mongoose.model('Course', courseSchema);