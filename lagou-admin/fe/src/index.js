import menuTpl from './views/menu.html'
import router from './router/Router.js';
import './controller/UserController.js';
import './style/common.scss'

class Index {
  constructor() {
    this.initEvent()
    this.init()
    this.socket()
  }

  init() {
    $("#menu-container").html(menuTpl)
  }

  initEvent() {
    $.ajaxSetup({ // jq的ajax的生命周期钩子
      beforeSend(xhr, settings) {
        xhr.setRequestHeader('X-ACCESS-TOKEN', localStorage.getItem('token'))
      },
      complete(xhr, settings) {
        if (xhr.responseJSON.code === 401) {
          console.log(xhr.responseJSON.msg)
          router.go('/index')
        }
      }
    })
  }
  socket() {
    var socket = io.connect('http://localhost:3000');
    socket.on('message', function (msg) {
      console.log(msg);
    })
  }
}

new Index()
