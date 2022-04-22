const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");
const Activities = require("./../Schemas/activity");
const Parent_link = require("./../Schemas/parent_therapist");
const Message = require("./../Schemas/messages");
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

 router.get("/grade", function (req, res) {
    Grade.find(function (err, grades) {
        if (err) {
            console.log(err);
            return res.status(404).send("Unable to get grades");
        } else {
            return res.status(200).json(grades);
        }
    })
 });

    router.get("/link", function (req, res) {
        Parent_link.find(function (err, parent_links) {
            if (err) {
                console.log(err);
                return res.status(404).send("Unable to get parent_links");
            } else {
                return res.status(200).json(parent_links);
            }
        })
    });
    router.get("/message", function (req, res) {
        Message.find(function (err, messages) {
            if (err) {
                console.log(err);
                return res.status(404).send("Unable to get messages");
            } else {
                return res.status(200).json(messages);
            }
        })
    });



 module.exports = router;