module.exports = (sequelize, DataTypes) => {
    const postComment = sequelize.define("postlike",
      {
        list_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: false,
        },
        post_uid: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
        },
        user_uid: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
        },
      },
      { timestamps: false }
    );
    return postComment;
  };
  