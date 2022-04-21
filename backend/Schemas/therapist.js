
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const therapist = new Schema(
    {
        Name:{
            type :String,
            required:true},
        Age:{
            type :String,
            required:true},

        Experience:{
            type:String,
            required:true},
        
        Qualification:{
            type:String,
            required:true},
        Email:{
            type:String,
            required:true},
        Password:{
            type:String,
            required:true},
        Contact:{
            type:String,
            required:true},
    }
)


module.exports = Therapist = mongoose.model("Therapist-Data", therapist);