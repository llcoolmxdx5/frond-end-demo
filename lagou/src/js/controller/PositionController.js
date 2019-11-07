import positionhtml from '../../views/position/positionlist.html'
import itemHtml from '../../views/position/positionlist-item.html'

import fetch from '../model/Fetch'

class PositionController {

  async render() {
    $("#main-container").html(positionhtml)
    $("#loading").show();
    let rs = await fetch.getPositionList();
    let html = template.render(itemHtml, { list: rs.content.data.page.result })
    $("#list-container").html(html)
    $("#loading").hide();
  }
}

export default new PositionController();