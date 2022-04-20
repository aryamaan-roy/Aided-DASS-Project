const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");


router.post("/", (req, res) => {
    const Email = req.body.email;
    // Find user by name
    Therapist.findOne({ Email }).then(user => {
        // Check if user name exists as therapist
        if (!user) {
            Parents.findOne({ Email }).then(par => {
                // Check if user name exists as parent
                if (!par) {
                    return res.status(404).send("Email not found");
                }
                else if (par.Password == req.body.password) {
                    return res.status(200).send(par._id);
                    //return parent user;
                }
                else {
                    return res.status(404).send("Password of Parent incorrect");
                }
            });
        }
        else if (user.Password == req.body.password) {
            return res.status(202).send(user._id);
            //return user;
        }
        else {
            return res.status(404).send("Password of therapist incorrect");
        }
    });
});

module.exports = router;