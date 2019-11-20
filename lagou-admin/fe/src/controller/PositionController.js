import PosTpl from '../views/position.html';
import PosAddTpl from '../views/position_add.html';
import '../style/position.scss';
import router from '../router/Router';
import handlebar from 'handlebars';

class PositionController {
  constructor() {
    this.list = []
    this.keyword = ''
    this.pageNo = 1 //第几页数据
    this.pageSize = 5 // 每页展示数据的条数
  }
  async render(req, res) {
    this.res = res
    let data = await this._queryList()
    this._renderList(data)
    this._positionEvent()
  }
  addRender(req, res) {
    res.render(PosAddTpl)
    this._addEvent()
  }
  _renderList(data) {
    let num = () => { // 11 => [1,2,3]
      let result = [];
      for (let i = this.pageNo; i < Math.ceil(data.total / this.pageSize) + 1; i++) {
        result.push(i);
      }
      return result;
    }
    let template = handlebar.compile(PosTpl)
    let html = template({ data: data.data, pages: num() })
    this.res.render(html)
  }
  _queryList(key) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/position/list',
        data: {
          key: this.keyword,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        type: 'get',
        success: (data) => {
          if (data.code === 200) {
            resolve(data)
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
    $('button[name="remove"]').on('click', async function (e) {
      let id = $(this).attr('data-id')
      let result = await self._delSubmit(id)
      if (result.code === 200) {
        console.log(result.msg)
        self.render(self.req, self.res)
      }
    })
    $('#btn-search').on('click', async e => {
      let val = $('#txt-keyword').val()
      this.keyword = val
      let data = await this._queryList()
      this._renderList(data)
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
  _delSubmit(id) {
    return new Promise((resolve, reject) => {
      let url = '/api/position/del?id=' + id;
      $.ajax({
        type: 'delete',
        url: url,
        success: (result) => {
          resolve(result);
        },
        error(data) {
          reject(data)
        }
      })
    });
  }
}
const self = new PositionController()
export default self