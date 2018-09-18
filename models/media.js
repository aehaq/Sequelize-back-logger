module.exports = function(sequelize, DataTypes) {
    var Media = sequelize.define("Media", {
      media_name: DataTypes.STRING,
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
    return Media;
  };