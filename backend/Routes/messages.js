const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");
const Activity = require("./../Schemas/activity");
const Grade = require("./../Schemas/grades");
const Parent_link = require("./../Schemas/parent_therapist");
const Message = require("./../Schemas/messages");


router.post("/add_message", (req, res) => {
    const {
        Parent_id,
        Therapist_name,
        Message_text,
    } = req.body
    Therapist.findOne({ Name: String(Therapist_name) }, (err, therapist) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (therapist) {
                Parents.findOne({ _id: String(Parent_id) }, (err, parent) => {
                    if (err) {
                        return res.status(400).send(err);
                    } else {
                        if (parent) {
                            const new_message = new Message({
                                Parent_id: String(Parent_id),
                                Parent_name: String(parent.Parent_name),
                                Child_name: String(parent.Child_name),
                                Therapist_name: String(Therapist_name),
                                Therapist_id: String(therapist._id),
                                Message_text: String(Message_text),
                            })
                            new_message.save(err => {
                                if (err) {
                                    return res.status(400).send(err)
                                } else {
                                    return res.status(200).send("Message sent successfully")
                                }
                            })
                        }
                    }



                });
            }
        }
    });

});

router.post("/get_parent_messages", (req, res) => {
    const { Parent_id } = req.body;
    Message.find({ Parent_id: String(Parent_id) }, (err, message) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (message) {
                return res.status(200).json(message);
            }
        }
    });
    
});
router.post("/get_therapist_messages", (req, res) => {
    const { Therapist_id } = req.body;
    Message.find({ Therapist_id: String(Therapist_id) }, (err, message) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (message) {
                return res.status(200).json(message);
            }
        }
    });
    
});
module.exports = router;
