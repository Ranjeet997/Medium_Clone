const express = require("express");
const db = require("../Models");
//Assigning db.users to User variable
const User = db.users;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const saveUser = async (req, res, next) => {
  //search the database to see if user exist
  try {
    const { email, source } = req.body.email;
    //checking if email already exist
    if (email) {
      const emailcheck = await User.findOne({
        where: {
          email: email,
        },
      });
      
      //if email exist in the database respond with a status of 409
      if (emailcheck && source === emailcheck.source) {
        return res.json(409).send("data is already available");
      }else{
        return res.json(409).send("Invalid credentials");
      }
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

//exporting module
module.exports = {
  saveUser,
};
