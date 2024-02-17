"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cast.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      lastName: {
   
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail:true
        }
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
          min: 18
        }
      },
      costPerHour: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isNumeric: true
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        validate:{
          isNumeric: true
        }
      },
      description: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Cast",
    }
  );
  return Cast;
};
