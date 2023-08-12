const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const SignUp = sequelize.define('signup', {
    id:{
       type: Sequelize.INTEGER,
       allowNull:false,
       primaryKey:true,
       autoIncrement:true
    },
    userName: {
         type: Sequelize.STRING,
         allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports=SignUp;