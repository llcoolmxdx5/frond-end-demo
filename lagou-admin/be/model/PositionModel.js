const mongoose = require('../utils/db');

class PositionModel {
  constructor() {
    let Schema = mongoose.Schema;
    let PositionSchema = new Schema({
      companyLogo: { type: String }, //用户账号
      companyName: { type: String }, //密码
      createTime: { type: String },
      positionName: { type: String },
      city: { type: String },
      salary: { type: String },
    });
    this.model = mongoose.model('position', PositionSchema, 'position');
  }
  async save(data) {
    let positionModel = new this.model(data);
    return await positionModel.save();
  }
  del() {

  }
  updata() {

  }
  query(condition) {
    return this.model.find(condition)
  }
  findOne(data) {
    return this.model.findOne(data)
  }
}
module.exports = new PositionModel()