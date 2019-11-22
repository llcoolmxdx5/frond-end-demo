const UserModel = require('../model/UserModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

class UserController {
  constructor() {

  }
  _createJWT(username) {
    // return jwt.sign(username, 'lagou') // 对称加密
    let privateKey = fs.readFileSync(path.resolve(__dirname, '../key/rsa_private_key.pem'));
    let token = jwt.sign(username, privateKey, { algorithm: 'RS256' });
    return token
  }
  async login(req, res) {
    let { username, password } = req.body
    let result = await UserModel.findOne({ username })
    if (!result) {
      res.send({ code: 403, msg: '用户名不存在' })
      return
    }
    let pwdIsTrue = this._compareHashPwd(password, result.password)
    if (pwdIsTrue) {
      req.session.username = username
      res.set('X-ACCESS-TOKEN', this._createJWT(username))
      res.send({ code: 200, msg: '登陆成功', username })
    } else {
      res.send({ code: 200, msg: '密码错误', username })
    }
  }

  async signin(req, res) {
    let { username, password } = req.body
    if (!/^\w{6,10}$/.test(username)) {
      res.send({ code: 403, msg: '用户名长度应为6-10位' })
      return
    }
    let user = await UserModel.findOne({ username })
    if (user) {
      res.send({ code: 403, msg: '用户名重复' })
      return
    }
    password = this._createHashPwd(password) // 加密
    let result = await UserModel.save({ username, password });
    if (result) {
      res.send({ code: 200, msg: '用户注册成功' })
    } else {
      res.send({ code: 403, msg: '用户注册失败' })
    }
  }

  isLogin(req, res) {
    if (req.session && req.session.username) {
      res.send({ code: 200, msg: '成功', username: req.session.username })
    } else {
      res.send({ code: 403, msg: '用户未登录' })
    }
  }
  logOut(req, res) {
    req.session.username = null
    res.send({ code: 200, msg: '用户已注销' })

  }

  _createHashPwd(pwd) {
    return bcrypt.hashSync(pwd, 10)
  }

  _compareHashPwd(pwd, hash) {
    return bcrypt.compareSync(pwd, hash)
  }
}
module.exports = new UserController()
