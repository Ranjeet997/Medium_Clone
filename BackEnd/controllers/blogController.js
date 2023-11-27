const bcrypt = require("bcrypt");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const slug = require("slug");
const { Sequelize, DataTypes } = require("sequelize");

// Assigning users to the variable User
const Blogs = db.userblogs;

const createNewData = () => {
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

  return date.toLocaleString("en-US", options);
};

//signing a user up
//hashing users password before its saved to the database with bcrypt
const createBlog = async (req, res) => {
  try {
    var {
      post_id,
      post_uid,
      user_uid,
      post_title,
      post_content,
      post_tags,
      unlisted,
      featured_image,
      pin_story,
      post_status,
      post_slug,
      meta_title,
      meta_description,
      from_browser,
      created_at,
      updated_at,
      schedule_time,
      theme,
      twitter_url,
      instagram_url,
      linkedin_url,
      facebook_url,
    } = req.body;

    // Get the current time in milliseconds
    var currentTimeMillis = Date.now();

    // Convert milliseconds to seconds and round down
    var currentTimeUnix = Math.floor(currentTimeMillis / 1000);

    // Print the current Unix time
    console.log(currentTimeUnix);
    post_slug = slug(post_title) + "-" + currentTimeUnix;

    const formattedDate = await createNewData();
    console.log(formattedDate);
    created_at = formattedDate;

    const data = {
      post_id,
      post_uid,
      user_uid,
      post_title,
      post_content,
      post_tags,
      unlisted,
      featured_image,
      pin_story,
      post_status,
      post_slug,
      meta_title,
      meta_description,
      from_browser,
      created_at,
      updated_at,
      schedule_time,
      theme,
      twitter_url,
      instagram_url,
      linkedin_url,
      facebook_url,
    };
    // const jdata = JSON.parse(data);
    //saving the user
    const blogs = await Blogs.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (blogs) {
      let token = jwt.sign({ id: blogs.id }, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("Blogs", JSON.stringify(blogs, null, 2));
      console.log(token);
      //send users details
      res.status(201).send(JSON.stringify(blogs));
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    var post_uid = req.body.post_uid;
    const updateData = req.body;
    console.log("this is postupdated data req", updateData);
    if(updateData){
      const data = {};
      for (let key in updateData) {
        if (key === "post_title") {
          var currentTimeMillis = Date.now();
          // Convert milliseconds to seconds and round down
          var currentTimeUnix = Math.floor(currentTimeMillis / 1000);
          // Print the current Unix time
          console.log(currentTimeUnix);
  
          data[`${key}`] = `${updateData[key]}`;
          data["post_slug"] = `${slug(updateData[key])}-${currentTimeUnix}`;
        } else if (key === "updated_at") {
          const formattedDate = await createNewData();
          data["updated_at"] = `${formattedDate}`;
        } else {
          data[`${key}`] = `${updateData[key]}`;
        }
      }
  
      const [numRowsAffected, [updatedRow]] = await Blogs.update(data, {
        returning: true,
        where: { post_uid },
      });
      res.status(200).json("Updated post Successfully");
    }else{
      res
      .status(500)
      .json({ message: "An error occurred while updating the row" });
    }
    
  } catch (error) {
    console.error(error);
  }
};

const readAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findAll();
    if(blogs){
      res.status(201).json(blogs);
    }else{
      res
      .status(500)
      .json({ message: "An error occurred while fetching the data" });
    }
  } catch (error) {
    console.log(error);
  }
};

const readOneBlogs = async (req, res) => {
  try {
    const post_slug = req.params.slug_id;
    // find a post details by there post_slug
    if(post_slug){
      const blogs = await Blogs.findOne({ where: { post_slug: post_slug } });
      res.status(201).json(blogs);
    }else{
      res
      .status(500)
      .json({ message: "An error occurred while fetching the data" });
    }

  } catch (error) {
    console.log(error);
  }
};

const readIndividualData = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if(user_id){
      const blogs = await Blogs.findAll({ where: { user_uid: user_id } });
      res.status(201).json(blogs);
    }else{
      res.json({ message: "An error occurred while fetching the data" });
    }
  } catch (error) {
    console.log(error);
  }
};

const dropBlogTable = async (req, res) => {
  try {
    const post_slug = req.params.slug_id;
    if(post_slug){
      const blogs = await Blogs.destroy({ where: { post_slug: post_slug } });
      res.status(201).json("deleted data successfully");
    }else{
      res
      .status(500)
      .json({ message: "An error occurred while deleting the data" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlog,
  updateBlog,
  readAllBlogs,
  readIndividualData,
  readOneBlogs,
  dropBlogTable,
};
