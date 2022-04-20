const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const message_schema = new Schema(
    {
        Parent_id : String,
        Therapist_id : String,
        Message_text : String,
        Reply_text : String,
        Status : Number,
    }
)

module.exports = Message = mongoose.model("Message-Data", message_schema);