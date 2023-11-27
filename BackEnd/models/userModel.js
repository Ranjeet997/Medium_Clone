module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( "user", {
        user_uid: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
          },
        userName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            isEmail: true, //checks for email format
            allowNull: true
        },
        twitter_id: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        user_picture: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        source: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    } )
    return User
 }

 