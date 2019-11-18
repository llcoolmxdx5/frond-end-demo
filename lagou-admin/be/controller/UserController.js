const UserModel = require('../model/UserModel')

class UserController {
  constructor() {

  }
  login(req, res) {
    res.send(req.body)
  }
  signin(req, res) {
    let {username, password} = req.body
    if (/^\w{6,10}$/.test(username)) {
      res.send({ code:403, msg:'用户名长度应为6-10位' })
      return
    }
    let result = await UserModel.save(req.body);
    res.send(result)
  }
}
module.exports = new UserController()