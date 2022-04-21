const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const grade_schema = new Schema(
    {
        Child_name : String,
        grade_letter:String,
        Activity_name : String,
        Comment_text : String,
        Therapist_name : String,
    }
)

module.exports = Grade = mongoose.model("Grade-Data", grade_schema);