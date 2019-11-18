import userTpl from '../views/user.html';
import handlebar from 'handlebars';

class UserController {
  constructor() {
    this.user = {
      username: 'admin',
      isLogin: false
    }
    this.showLogin = true;
    this.render()
    this._initEvent()
  }
  render() {
    let template = handlebar.compile(userTpl)
    let html = template(this.user)
    $('#user-container').html(html)
  }
  _initEvent() {
    $('#login').on('click', (e) => {
      $('.box-title').html('登陆')
      this.showLogin = true
    })
    $('#signin').on('click', (e) => {
      $('.box-title').html('注册')
      this.showLogin = false
    })
    $('#btn-submit').on('click', (e) => {
      this._submit()
    })
  }
  _submit() {
    $.ajax({
      url: this.showLogin ? '/api/user/login' : '/api/user/signin',
      data: $('#user-form').serialize(),
      type: 'post',
      success(data) {
        console.log(data)
      },
      error(data) {
        console.log(data)
      }
    })
  }
}
export default new UserController()