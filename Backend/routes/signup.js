const express=require('express');
const router=express.Router();
const signupController=require('../controllers/signup');

router.post('/user/signup', signupController.postSignUpData);

module.exports=router;