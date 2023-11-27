const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

// Assigning users to the variable User
const User = db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const googlesignup = async (req, res) => {
  try {
    const { userName, email, user_picture, source } = req.body;
    if (email) {
      const emailcheck = await User.findOne({
        where: {
          email: email,
        },
      });

      //if email exist in the database respond with a status of 409

      var user = "";
      //saving the user
      if (emailcheck && source === emailcheck.source) {
        return res.send(emailcheck);
      } else if (emailcheck && source !== emailcheck.source) {
        return res.status(409).send("You Have Login With Other Source");
      } else {
        let user_uid = uuidv4();
        console.log("this is user id", user_uid);
        const data = {
          user_uid,
          userName,
          email,
          user_picture,
          source,
        };
        user = await User.create(data);
        //if user details is captured
        //generate token with the user's id and the secretKey in the env file
        // set cookie with the token generated
        if (user) {
          let token = jwt.sign({ id: user.id }, process.env.secretKey, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });

          res.cookie("jwt", token, {
            maxAge: 1 * 24 * 60 * 60,
            httpOnly: true,
          });
          console.log("user", JSON.stringify(user, null, 2));
          console.log(token);
          //send users details
          return res.status(201).send(user);
        } else {
          return res.status(409).send("Details are not correct");
        }
      }
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  googlesignup,
};
