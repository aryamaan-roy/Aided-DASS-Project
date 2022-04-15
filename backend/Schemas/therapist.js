
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const therapist = new Schema(
    {
        Name:String,
        Age:String,
        Experience:String,
        Qualification:String,
        Email:String,
        Password:String,
        Contact:String
    }
)


module.exports = Therapist = mongoose.model("Therapist-Data", therapist);