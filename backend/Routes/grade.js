const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");
const Activity = require("./../Schemas/activity");
const Grade = require("./../Schemas/grades");
const Parent_link = require("./../Schemas/parent_therapist");


router.post("/get_grade", (req, res) => {
    const { Therapist_id } = req.body;
    var Therapist_nam;
    Therapist.findOne({ _id: String(Therapist_id) }, (err, therapist) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (therapist) {
                Grade.find({ Therapist_name: therapist.Name }, (err, grade) => {
                    if (err) {
                        return res.send(err);
                    } else {
                        return res.status(200).json(grade);
                    }
                });
            }
        }
    });
    
});


router.post("/add_grade", (req, res) => {
    const {
        Therapist_id,
        grade_letter,
        Activity_name,
        Child_name,
        Comment_text,
    } = req.body
    var Therapist_name;
    Therapist.findOne({ _id: String(Therapist_id) }, (err, therapist) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (therapist) {
                Therapist_name = therapist.Name;
            }
        }
    });


    Grade.findOne({ Child_name: Child_name, Therapist_name: Therapist_name, Activity_name: Activity_name }, (err, found_grade) => {
        if (found_grade) {
            return res.status(404).send("Grade already given")
        } else {
            const new_grade = new Grade({
                Therapist_name,
                grade_letter,
                Activity_name,
                Child_name,
                Comment_text,
            })
            new_grade.save(err => {
                if (err) {
                    return res.status(400).send(err)
                } else {
                    return res.status(200).send("Grade added successfully")
                }
            })
        }
    })
})

module.exports = router;
