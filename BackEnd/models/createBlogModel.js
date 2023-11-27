module.exports = (sequelize, DataTypes) => {
  const Googleusers = sequelize.define("userblogs",
    {
      post_uid: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      user_uid: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      post_title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      post_tags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      unlisted: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      featured_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pin_story: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      post_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      post_slug: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      meta_title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      meta_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      from_browser: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      schedule_time: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      theme: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      twitter_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      instagram_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedin_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebook_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }
  );
  return Googleusers;
};
