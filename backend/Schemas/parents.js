const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const parents = new Schema(
    {
        Parent_name:String,
        Child_name:String,
        Child_age:String,
        Email:String,
        Password:String,
        Contact:String
    }
)

module.exports = Parents = mongoose.model("Parents-Data", parents);