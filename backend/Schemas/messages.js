const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const message_schema = new Schema(
    {
        Parent_id: { type: String, required: true },
        Parent_name: { type: String, required: true },
        Child_name: { type: String, required: true },
        Therapist_name: { type: String, required: true },
        Therapist_id: { type: String, required: true },
        Message_text: { type: String, required: true },
        Reply_text: { type: String, required: false },
    }
)

module.exports = Message = mongoose.model("Message-Data", message_schema);