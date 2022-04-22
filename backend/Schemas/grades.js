const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const grade_schema = new Schema(
    {
        Child_name:
        {
            type: String,
            required: true
        },
        grade_letter:
        {
            type: String,
            required: true
        },
        Activity_name: {
            type: String,
            required: true
        },
        Comment_text: {
            type: String,
            required: true
        },
        Therapist_name: {
            type: String,
            required: true
        },
    }
)

module.exports = Grade = mongoose.model("Grade-Data", grade_schema);