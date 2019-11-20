const PositionModel = require('../model/PositionModel');

class PositionCtroller {
  constructor() {

  }
  async add(req, res) {
    req.body.createTime = new Date().toLocaleDateString();
    let result = await PositionModel.save(req.body)
    if (result) {
      res.send({ code: 200, msg: '添加成功' })
    } else {
      res.send({ code: 403, msg: '添加失败' })
    }
  }
  async list(req, res) {
    let data = await PositionModel.query(req.query)
    let total = await PositionModel.count(req.query)
    res.send({ code: 200, msg: '职位列表查询成功', data, total })
  }
  async del(req, res) {
    let rs = await PositionModel.del(req.query.id);
    if (rs.n && rs.deletedCount) {
      res.send({ code: 200, msg: '删除成功' });
    } else {
      res.send({ code: 403, msg: '删除失败' });
    }
  }
}
module.exports = new PositionCtroller()