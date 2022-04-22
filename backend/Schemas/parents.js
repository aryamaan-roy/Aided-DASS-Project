const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const parents = new Schema(
    {
        Parent_name:
        {
            type: String,
            required: true
        },
        Child_name: {
            type: String,
            required: true
        },
        Child_age: {
            type: String,
            required: true
        },
        Email:
        {
            type: String,
            required: true
        },
        Password: {
            type: String,
            required: true
        },
        Contact: {
            type: String,
            required: true
        },

    }
)

module.exports = Parents = mongoose.model("Parents-Data", parents);