const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");
const Activities = require("./../Schemas/activity");
router.get("/p", function (req, res) {
    Parents.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
 });
 router.get("/t", function (req, res) {
    Therapist.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
 });
 router.get("/activity", function (req, res) {
    Activities.find(function (err, activities) {
        if (err) {
            console.log(err);
            return res.status(404).send("Unable to get activities");
        } else {
            return res.status(200).json(activities);
        }
    })
 });

 module.exports = router;