import menuTpl from './views/menu.html'
import './router/Router.js';
import './controller/UserController.js';
import './style/common.scss'

class Index {
  constructor() {
    this.init()
  }

  init() {
    $("#menu-container").html(menuTpl)
  }
}

new Index()

