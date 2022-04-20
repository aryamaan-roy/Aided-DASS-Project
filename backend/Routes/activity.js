const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");
const Activity = require("./../Schemas/activity");

router.post("/create_activity", (req, res) => {
    const {
        Therapist_id,
        Name,
        Description,
        Intensity,
    } = req.body

    Activity.findOne({ Name: Name, Therapist_id:Therapist_id }, (err, found_activity) => {
        if (found_activity) {
            return res.status(404).send("Activity already registerd")
        } else {
            const new_activity = new Activity({
                Therapist_id,
                Name,
                Description,
                Intensity,
            })
            new_activity.save(err => {
                if (err) {
                    return res.status(400).send(err)
                } else {
                    return res.status(200).send("Activity added successfully")
                }
            })
        }
    })
})

module.exports = router;
