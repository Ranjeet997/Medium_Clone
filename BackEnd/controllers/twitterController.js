const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

// Assigning users to the variable User
const User = db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const twitterSignup = async (req, res) => {
  try {
    const { userName, twitter_id, source } = req.body;
    if(twitter_id){
      const checkTwitterId = await User.findOne({
        where: {
          twitter_id: twitter_id,
        },
      });
      if(checkTwitterId && source === emailcheck.source){
        return res.send(emailcheck);
      }else if(!checkTwitterId){
        let user_uid = uuidv4();
        const data = {
          user_uid,
          userName,
          twitter_id,
          source,
        };
        //saving the user
        const user = await User.create(data);
    
        //if user details is captured
        //generate token with the user's id and the secretKey in the env file
        // set cookie with the token generated
        if (user) {
          let token = jwt.sign({ id: user.id }, process.env.secretKey, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });
    
          res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
          console.log("user", JSON.stringify(user, null, 2));
          console.log(token);
          //send users details
          return res.status(201).send(user);
        }else {
          return res.status(409).send("Details are not correct");
        }
      }else{
        return res.status(409).send("You Login With Other Source");
      }
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

//login authentication

const twitterLogin = async (req, res) => {
  try {
    const { twitter_id, source } = req.body;

    //find a user by their twitter_id
    const user = await User.findOne({
      where: {
        twitter_id: twitter_id,
      },
    });

    //if user email is found, compare password with bcrypt
    if (user) {
      //generate token with the user's id and the secretKey in the env file
      if (source === user.source) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        //send user data
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  twitterSignup,
  twitterLogin,
};
