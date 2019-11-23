const PositionModel = require('../model/PositionModel');

class PositionCtroller {
  constructor() {

  }
  async add(req, res) {
    req.body.createTime = new Date().toLocaleDateString();
    let result = await PositionModel.save(req.body)
    if (result) {
      this.boradcast('添加了新的职位信息了')
      res.send({ code: 200, msg: '添加成功' })
    } else {
      res.send({ code: 403, msg: '添加失败' })
    }
  }
  async list(req, res) {
    console.log(req.query)
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
  async findOne(req, res) {
    let id = req.query.id
    let data = await PositionModel.findOne(id)
    res.send({code:200, msg:'查找一个成功', data})
  }
  async update(req, res) {
    let _id = req.body.id;
    delete req.body["id"];
    var result = await PositionModel.update(_id, req.body);
    if (result) {
      res.send({ code: 200, msg: "更新职位信息成功" })
    } else {
      res.send({ code: 403, msg: "更新职位信息失败" })
    }
  }
  boradcast(msg) {
    for (let o in clientlist) {
      clientlist[o].emit('message', msg);
    }
  }
}
module.exports = new PositionCtroller()
