// import express from 'express'
const express = require("express");
const router = express.Router();
const Therapist = require("./../Schemas/therapist");
const Parents = require("./../Schemas/parents");


router.post("/register-parents" , (req,res)=>{
    const { Parent_name,
        Child_name,
        Child_age,
        Email,
        Password,
        Contact  } = req.body
    
    // console.log(user);


    Parents.findOne({Email: Email}, (err, user) => {
    if(user){
        return res.send("User already registerd")
    } else {
        const user = new Parents({
            Parent_name,
            Child_name,
            Child_age,
            Email,
            Password,
            Contact
        })
        user.save(err => {
            if(err) {
                res.send(err)
            } else {
                return res.send("Successfully Registered, Please login now.")
            }
        })
    }
})



})

router.post("/register-therapist" , (req,res)=>{
    const { Name,
        Age,
        Experience,
        Qualification,
        Email,
        Password,
        Contact } = req.body
    
    // console.log(user);


   Therapist.findOne({Email: Email}, (err, user) => {
    if(user){
        return res.send("User already registerd")
    } else {
        const user = new Therapist({
            Name,
            Age,
            Experience,
            Qualification,
            Email,
            Password,
            Contact
        })
        user.save(err => {
            if(err) {
                res.send(err)
            } else {
                return res.send("Successfully Registered, Please login now." )
            }
        })
    }
})



})

module.exports = router;



