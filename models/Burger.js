// CREATE DATABASE `burger_db`;

// USE `burger_db`;

// CREATE TABLE `burgers`
// (
// 	`id` INTEGER (11) NOT NULL AUTO_INCREMENT,
// 	`burger_name` VARCHAR (75) NOT NULL,
// 	`devoured` BOOLEAN DEFAULT false,
// 	`date` DATETIME NOT NULL DEFAULT NOW(),
// 	PRIMARY KEY (`id`)
// );


module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define("burgers2", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    date:{
    	type: DataTypes.DATE,
    	allowNull: false
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  }
  );

  return Burger;
};



