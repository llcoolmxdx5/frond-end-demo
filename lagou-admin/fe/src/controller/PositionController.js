import PosTpl from '../views/position.html';
import PosAddTpl from '../views/position_add.html';
import '../style/position.scss';
import router from '../router/Router';
import handlebar from 'handlebars';

class PositionController {
  constructor() {
    this.list = []
  }
  async render(req, res) {
    let data = await this._queryList()
    let template = handlebar.compile(PosTpl)
    let html = template({ data })
    res.render(html)
    this._positionEvent()
  }
  addRender(req, res) {
    res.render(PosAddTpl)
    this._addEvent()
  }
  _queryList() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/position/list',
        type: 'get',
        success: (data) => {
          if (data.code === 200) {
            resolve(data.data)
          }
        },
        error: (data) => {
          console.log(data.msg)
          reject(data)
        }
      })
    })
  }
  _positionEvent() {
    $('#position-add').on('click', e => {
      router.go('/position/add')
    })
  }
  _addEvent() {
    $('#btn-back').on('click', e => {
      router.go('/position/index')
    })
    $('#btn-submit').on('click', e => {
      $("#position-add-form").ajaxSubmit({
        success: (data) => {
          if (data.code === 200) {
            console.log(data.msg)
            router.go('/position/index')
          }
        },
        error: (data) => {
          console.log(data.msg)
        }
      })
    })
  }
}
export default new PositionController()