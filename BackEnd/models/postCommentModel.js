module.exports = (sequelize, DataTypes) => {
    const postComment = sequelize.define("postcomment",
      {
        comment_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: false,
        },
        comment_uid: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
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
        comment: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        from_ip: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        from_browser: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.STRING,
          allowNull: true,
        }
      },
      { timestamps: false }
    );
    return postComment;
  };
  