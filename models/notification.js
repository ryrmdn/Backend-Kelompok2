'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init({
    from_userId: DataTypes.STRING,
    to_userId: DataTypes.STRING,
    product_id: DataTypes.STRING,
    req_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};