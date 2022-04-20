const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const activity = new Schema({
        Therapist_id: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Intensity: {
            type: String,
            required: true
        }
});

module.exports = Activity = mongoose.model("Activity-Data", activity);