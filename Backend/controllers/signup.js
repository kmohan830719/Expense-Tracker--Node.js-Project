const Signup=require('../models/signup');

exports.postSignUpData=(req,res,next)=>{
    const userName=req.body.userName;
    const email=req.body.email;
    const password=req.body.password;

   Signup.create({
    userName:userName,
    email:email,
    password:password
   }).then(result=>{
    res.send(result);
   }).catch(err=>{
    if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ error: 'Email address already exists.' });
    } else {
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
    console.log(err);
   })
}