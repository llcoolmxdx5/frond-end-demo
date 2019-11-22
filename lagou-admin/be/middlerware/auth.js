const jwt = require('jsonwebtoken');
const path = require('path');

function auth(req, res, next) {
  // try {
  //   let token = req.get('X-ACCESS-TOKEN')
  //   let result = jwt.verify(token, 'lagou')
  //   if (result !== req.session.username) {
  //     res.status(401).send({ code: 401, msg: '用户名验证失败' })
  //   } else {
  //     next()
  //   }
  // } catch (error) {
  //   res.status(403).send({ code: 403, msg: '禁止操作' })
  // }
  let token = req.get("X-ACCESS-TOKEN");
  let cert = fs.readFileSync(path.resolve(__dirname, '../key/rsa_public_key.pem'));  // get public key
  jwt.verify(token, cert, function (err, decoded) {
    if (err) {
      res.send({ code: 403, msg: '禁止操作' });
    } else {
      console.log('decoded:', decoded) // bar
      if (decoded == req.session.username) {
        next()
      } else {
        res.send({ code: 401, msg: '用户名验证失败' });
      }
    }
  });
}

module.exports = auth;
