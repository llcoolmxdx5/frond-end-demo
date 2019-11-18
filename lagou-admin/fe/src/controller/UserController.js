import userTpl from '../views/user.html';
import handlebar from 'handlebars';

class UserController {
  constructor() {
    this.user = {
      username: '',
      isLogin: false
    }
    this.showLogin = true;
    this.render()
    this._initEvent()
    this._isLogin()
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
      success: (data) => {
        if (data.code === 200) {
          this.user.username = data.username
          this.user.isLogin = true
          this.render()
        }
        console.log(data.msg)
      },
      error: (data) => {
        console.log(data.msg)
      }
    })
  }
  _isLogin() {
    $.ajax({
      url: '/api/user/isLogin',
      type: 'get',
      success: (data) => {
        if (data.code === 200) {
          this.user.username = data.username
          this.user.isLogin = true
          this.render()
        }
        console.log(data.msg)
      },
      error: (data) => {
        console.log(data.msg)
      }
    })
  }
}
export default new UserController()