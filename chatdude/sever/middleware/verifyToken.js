const jwt = require('jsonwebtoken')
const secret_key = "qwertyuiopaasdfghjklzxcvbnmasdfghjkl";

const verifyToken = (req, res, next) => {
    if (req.headers["authorization"] === undefined) {
        req.send({
          ok: false,
          error: "token is missing",
        });
      } else {
        var token = req.headers.authorization.slice(7);
        jwt.verify(token, secret_key, (error, data) => {
          if (error) {
            res.send({
              ok: false,
              results: "token invalid",
            });
          } else {
            req.userdata = data;
            next();
          }
        });
      }
};

module.exports = verifyToken