const db = require('../model/db')

class Student {
  async add(ctx) {
    let params = ctx.request.body;
    let result = await db('insert into student set ? ', params);
    ctx.body = result;
  }

  async list(ctx) {
    let { name } = ctx.query;
    let result = await db('select * from student where name =? ', name);
    ctx.body = result;
  }

  async remove(ctx) {
    let { id } = ctx.request.body;
    let result = await db('delete from student where id =? ', id);
    ctx.body = result;
  }

  async update(ctx) {
    let { age, id } = ctx.request.body;
    let result = await db('update student set age = ? where id =? ', [age, id]);
    ctx.body = result;
  }
}

module.exports = new Student();
