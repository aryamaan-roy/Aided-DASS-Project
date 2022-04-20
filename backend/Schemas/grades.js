const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const grade_schema = new Schema(
    {
        Parent_id : String,
        grade_letter:String,
        Activity_id : String,
        Comment : String,
    }
)

module.exports = Grade = mongoose.model("Grade-Data", grade_schema);