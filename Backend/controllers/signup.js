const Signup = require('../models/signup');

//string validation
function stringValidator(str){
     if(str == undefined || str.length==0){
        return true;
     }else{
        return false;
     }
};

exports.postSignUpData = (req, res, next) => {
    const { userName, email, password } = req.body;
    if(stringValidator(userName) || stringValidator(email) ||stringValidator(password)){
        return res.status(500).json({error: 'An error occurred-somthing missing'})
    }

    Signup.create({ userName, email, password }).then(result => {
        res.send(result);
    }).catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ error: 'Email address already exists.' });
        } else {
            res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
        console.log(err);
    })
}