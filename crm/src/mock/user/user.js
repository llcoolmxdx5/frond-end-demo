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
      msg: "登陆失败"
    });
  }
});
