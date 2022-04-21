const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const parent_link = new Schema(
    {
        Parent_id:String,
        Therapist_id:String
    }
)

module.exports = Parent_link = mongoose.model("Parent-Therapist", parent_link);