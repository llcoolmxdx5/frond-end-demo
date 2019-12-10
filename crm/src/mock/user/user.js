import Mock from "mockjs";

Mock.setup({
  timeout: "200-600"
});

const User = {
  username: "admin",
  password: "123456"
};

Mock.mock("/api/user/login", "post", options => {
  let { username, password } = JSON.parse(options.body);
  if (username === User.username && password === User.password) {
    return Mock.mock({
      code: 200,
      msg: "登陆成功"
    });
  } else {
    return Mock.mock({
      code: 0,
      msg: "用户名或密码错误"
    });
  }
});

Mock.mock("/api/user/logout", "get", () => {
  return Mock.mock({
    code: 200,
    msg: "退出登录成功"
  });
});

const Users = [];

function InitUserData() {
  for (let i = 0; i < 66; i++) {
    let params = Mock.mock({
      id: "@increment()",
      name: "@cname()",
      sex: "@natural(0,1)",
      age: "@natural(1,100)",
      birthday: "@date()",
      address: "@county(true)"
    });
    Users.push(params);
  }
}
InitUserData();

Mock.mock("/api/user/list", "post", options => {
  let { name, pagesize, pageno } = JSON.parse(options.body);
  //查询
  let userlist = Users.filter(user => {
    return user.name.indexOf(name) > -1;
  });
  //分页
  let startIndex = (pageno - 1) * pagesize;
  let endIndex = startIndex + pagesize;
  let tempUsers = userlist.slice(startIndex, endIndex);
  return {
    code: 200,
    total: userlist.length,
    list: tempUsers
  };
});

Mock.mock("/api/user/del", "post", function(options) {
  let id = JSON.parse(options.body).id;
  Users.forEach((user, index) => {
    if (user.id === id) {
      Users.splice(index, 1);
    }
  });
  return {
    code: 200,
    message: "删除数据成功"
  };
});
