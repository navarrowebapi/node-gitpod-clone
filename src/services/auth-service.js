const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

exports.authorize = function(req, res, next){
    //1passo - buscar o token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token){
        res.status(401).json({auth:false, message:'Acesso Restrito'});
    }else{
        jwt.verify(token, process.env.SECRET, function(error, decode){
            if(error){
                res.status(401).json({auth:false, message:'Token inválido'});
            }else{
                next();
            }
        })
    }
}