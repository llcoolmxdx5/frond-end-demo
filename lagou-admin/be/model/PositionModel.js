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
  del(id) {
    return this.model.deleteOne({ _id: id })
  }
  update(id, data) {
    return this.model.updateOne({ _id: id }, { $set: data });
  }
  query(data) {
    let { key, pageSize, pageNo } = data
    pageNo -= 1
    let reg = new RegExp(key, 'i')
    return this.model.find({ $or: [{ companyName: reg }, { positionName: reg }] }).limit(pageSize * 1).skip(pageNo * pageSize)
  }
  count(data) {
    let { keyword } = data
    let reg = new RegExp(keyword, 'i')
    return this.model.find({ $or: [{ companyName: reg }, { positionName: reg }] }).count()
  }
  findOne(id) {
    return this.model.findOne({_id:id})
  }
}
module.exports = new PositionModel()