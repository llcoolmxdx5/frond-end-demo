const mongoose = require('../utils/db');

class UserModel {
  constructor() {
    let Schema = mongoose.Schema;
    let UserSchema = new Schema({
      username: { type: String, index: true }, //用户账号
      password: { type: String }, //密码
    });
    this.model = mongoose.model('users',UserSchema);
  }
  async save(data) {
    let userModel = new this.model(data);
    return await userModel.save();
  }
}
module.exports = new UserModel()