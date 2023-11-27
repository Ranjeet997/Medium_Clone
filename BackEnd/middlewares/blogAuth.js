const express = require("express");
const db = require("../Models");
//Assigning db.users to User variable
const User = db.userblogs;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const updatePost = async (req, res, next) => {
  //search the database to see if user exist
  try {
    const {post_id, user_uid} = req.body;
    //checking if email already exist
    if (post_id) {
      const postcheck = await User.findOne({
        where: {
          post_id: post_id
        },
      });

      //if email exist in the database respond with a status of 409
      if (!postcheck) {
        return res.json(409).send("Authentication failed");
      }
    }

    if (user_uid) {
      const userIdCheck = await User.findOne({
        where: {
          user_uid: user_uid,
        },
      });

      //if email exist in the database respond with a status of 409
      if (!userIdCheck) {
        return res.json(409).send("Authentication failed");
      }
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

//exporting module
module.exports = {
  updatePost,
};
