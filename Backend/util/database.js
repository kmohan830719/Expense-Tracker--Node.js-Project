const Sequelize=require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'Kmohan@180', {
    host: 'localhost',
    dialect: 'mysql',
  });


module.exports= sequelize;