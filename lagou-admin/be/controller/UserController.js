const UserModel = require('../model/UserModel')
const bcrypt = require('bcrypt');

class UserController {
  constructor() {

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
      res.send({ code: 200, msg: '成功', username })
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

  _createHashPwd(pwd) {
    return bcrypt.hashSync(pwd, 10)
  }

  _compareHashPwd(pwd, hash) {
    return bcrypt.compareSync(pwd, hash)
  }
}
module.exports = new UserController()
