'use strict';
module.exports = (sequelize, DataTypes) => {
  const provinces = sequelize.define('provinces', {
    pro_no: DataTypes.STRING,
    province_name: DataTypes.STRING,
  }, {
    tableName: 'provinces'
  });
  provinces.associate = function(models) {
         // associations can be defined here
  };
  return provinces;
};