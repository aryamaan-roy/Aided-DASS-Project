const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");
const Activity = require("./../Schemas/activity");
const Grade = require("./../Schemas/grades");
const Parent_link = require("./../Schemas/parent_therapist");


router.post("/add_link", (req, res) => {
    const { Parent_id,Therapist_name } = req.body;
    var Therapist_id;
    Therapist.findOne({ Name: Therapist_name }, (err, therapist) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (therapist) {
                Parent_link.findOne({ Parent_id: Parent_id, Therapist_id : String(therapist._id)}, (err, found_link) => {
                    if (found_link) {
                        return res.status(404).send("Therapist already chosen");
                    } else {
                        const new_link = new Parent_link({
                            Therapist_id,
                            Parent_id
                        })
                        new_link.save(err => {
                            if (err) {
                                return res.status(400).send(err)
                            } else {
                                return res.status(200).send("Therapist chosen successfully")
                            }
                        })
                    }
                })
            }
        }
    });

    
   
});

router.post("/get_therapists", (req, res) => {
    const { Parent_id} = req.body;
    Parent_link.find({ Parent_id: Parent_id }, (err, link) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (link) {
                return res.status(200).json(link);
            }
        }
    });

    
   
});


module.exports = router;
