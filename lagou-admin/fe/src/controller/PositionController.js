import PosTpl from '../views/position.html';
import PosAddTpl from '../views/position_add.html';
import '../style/position.scss';
import router from '../router/Router';

class PositionController {
  constructor() {

  }
  render(req, res) {
    res.render(PosTpl)
    this._positionEvent()
    // TODO
  }
  addRender(req, res) {
    res.render(PosAddTpl)
    this._addEvent()
  }
  _positionEvent() {
    $('#position-add').on('click', e => {
      router.go('/position/add')
    })
  }
  _addEvent() {
    $('#btn-back').on('click', e => {
      router.back()
    })
    $('#btn-submit').on('click', e => {
      console.log('add submit ')
      $("#position-add-form").ajaxSubmit({
        success: () => {
          console.log('success')
        },
        error: () => {
          console.log('error')
        }
      })
    })
  }
}
export default new PositionController()