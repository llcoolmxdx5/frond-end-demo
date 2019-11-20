import PosTpl from '../views/position.html';
import PosAddTpl from '../views/position_add.html';
import PosUpdataTpl from '../views/position_updata.html';
import '../style/position.scss';
import router from '../router/Router';
import handlebar from 'handlebars';

class PositionController {
  constructor() {
    this.list = []
    this.keyword = ''
    this.pageNo = 1 //第几页数据
    this.pageSize = 5 // 每页展示数据的条数
    this._initEvent()
  }
  async render(req, res) {
    this.res = res
    if (req.query) {
      this.pageSize = req.query.pageSize
      this.pageNo = req.query.pageNo
      this.keyword = req.query.key
    }
    let data = await this._queryList()
    this._renderList(data)
  }
  addRender(req, res) {
    res.render(PosAddTpl)
  }
  async updataRender(req, res) {
    let data = await this._findOne(req.params.id)
    console.log(data)
    let template = handlebar.compile(PosUpdataTpl)
    let html = template({ ...data.data });
    res.render(html)
  }
  _initEvent() {
    // 添加数据
    $("#main-container").on('click', '#position-add', e => {
      router.go('/position/add')
    })
    // 删除数据
    $("#main-container").on('click', 'button[name="remove"]', async function (e) {
      let id = $(this).attr('data-id')
      let result = await self._delSubmit(id)
      if (result.code === 200) {
        console.log(result.msg)
        self.render(self.req, self.res)
      }
    })
    // 编辑数据
    $("#main-container").on('click', 'button[name="updata"]', async function (e) {
      let id = $(this).attr('data-id')
      router.go('/position/updata/' + id)
    })
    // 搜索数据
    $("#main-container").on('click', '#btn-search', async e => {
      let val = $('#txt-keyword').val()
      this.keyword = val
      let data = await this._queryList()
      this._renderList(data)
    })
    // 数据添加页返回
    $("#main-container").on('click', '#btn-back', e => {
      router.go('/position/index')
    })
    // 数据添加页提交
    $("#main-container").on('click', 'button#btn-submit', e => {
      $("#position-add-form").ajaxSubmit({
        success: (data) => {
          if (data.code === 200) {
            console.log(data.msg)
            router.go('/position/index')
          }
        },
        error: (data) => {
          console.log(data)
        }
      })
    })
    // 数据编辑页返回
    $("#main-container").on('click', '#posback', () => {
      router.go('/position/index')
    })
    // 数据编辑页提交
    $("#main-container").on('click', '#btn-update', () => {
      console.log('update submit ')
      $("#posupdate").ajaxSubmit({
        success: (result) => {
          console.log(result.msg)
          if (result.code === 200) {
            router.go('/position/index')
          }
        },
        error: () => {
          console.log('error')
        }
      })
    })
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
    let html = template({
      data: data.data,
      pages: num(),
      pagesize: this.pageSize,
      keywords: this.keyword
    })
    this.res.render(html)
  }
  _queryList() {
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
  _findOne(id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/position/findone',
        data: { id },
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
}
const self = new PositionController()
export default self