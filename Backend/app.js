const express=require('express');
const sequelize=require('./util/database');
const cors=require('cors');
const app=express();

const signupRouter=require('./routes/signup');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());

app.use(signupRouter);

sequelize.sync().then(result=>{
    app.listen(4000);
}).catch(err=>console.log(err));