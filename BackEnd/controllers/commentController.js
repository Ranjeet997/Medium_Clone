const db = require("../Models");
const jwt = require("jsonwebtoken");

// Assigning users to the variable User
const Comment = db.postomment;
const Like = db.postlike

//signing a user up
//hashing users password before its saved to the database with bcrypt
const postComment = async (req, res) => {
  try {
    var {
      comment_uid,
      post_uid,
      user_uid,
      comment
    } = req.body;

    const date = new Date();
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Kolkata",
    };

    const formattedDate = date.toLocaleString("en-US", options);
    console.log(formattedDate);
    created_at = formattedDate;

    const data = {
      comment_uid,
      post_uid,
      user_uid,
      comment,
      created_at
    };
    // const jdata = JSON.parse(data);
    //saving the user
    const post = await Comment.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (post) {
      res.status(200).json("comment created successfully");
    } else {
      return res.status(409).json("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

const postLike =async(req,res)=>{
  try {
    var {
      list_id,
      post_uid,
      user_uid
    } = req.body;

    const data = {
      list_id,
      post_uid,
      user_uid
    };
    // const jdata = JSON.parse(data);
    //saving the user
    const postLike = await Like.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (postLike) {
      let token = jwt.sign({ id: postLike.list_id }, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log(token);
      //send users details
      res.status(201).send("Like posted successfully");
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  postComment,
  postLike
};
