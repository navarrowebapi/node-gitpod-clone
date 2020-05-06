const User = require('../app/models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

exports.login = async (mail, pass) => {
    const user = await User.findOne({ email: mail });
    const id = user._id;
    if(user.email===mail && user.validPassword(pass)){
        const token = jwt.sign({id}, process.env.SECRET, {expiresIn:60}); //1 min
        return token;
    }else{
        throw({status:404, code:'usuário não encontrado', message:'tente outro e-mail'})
    }
}

