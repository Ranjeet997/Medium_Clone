const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");

// connection with urls
// const sequelize = new Sequelize(
//   `postgres://postgres:qwerty@localhost:5432/test`,
//   { dialect: "postgres" }
// );

// Normal connection
const sequelize = new Sequelize('test', 'postgres', 'qwerty', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
  // Prevent Sequelize from automatically dropping tables
  // Instead, it will try to modify the existing tables
  alter: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the test:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("./userModel")(sequelize, DataTypes);
db.userblogs = require("./createBlogModel")(sequelize, DataTypes);
db.postomment = require("./postCommentModel")(sequelize, DataTypes);
db.postlike = require("./postLikeModel")(sequelize, DataTypes);



//exporting the module
module.exports = db;
