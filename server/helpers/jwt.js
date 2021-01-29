const expressJwt = require('express-jwt');
const general = require('./../config/env');
const env = require("./../config/env.js");
module.exports = jwt;

function jwt() {
    var  secret  = `${env.key}`;
    return expressJwt({ secret,   getToken: function fromHeaderOrQuerystring (req) {
        return req.headers.authorization || null;
      },algorithms: ['HS256'] }).unless({
        path: [
           {url:'/usuario/auth', methods:["POST"] },
           {url:'/ciudad/', methods:["GET"] },
           {url:'/sede/', methods:["GET"] }, 
           {url:'/usuario/', methods:["POST"] } 
        ]
    });
}