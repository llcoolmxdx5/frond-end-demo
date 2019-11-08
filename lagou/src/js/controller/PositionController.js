import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'

import positionhtml from '../../views/position/positionlist.html'
import itemHtml from '../../views/position/positionlist-item.html'
import fetch from '../model/Fetch'

BScroll.use(Pullup) // 底部下拉
BScroll.use(PullDown) //顶部下拉

class PositionController {

  getlist() {
    return new Promise(async (reslove, reject) => {
      $("#loading").show();
      let rs = await fetch.getPositionList();
      let html = template.render(itemHtml, { list: rs.content.data.page.result })
      $("#list-container").html(html)
      $("#loading").hide();
      reslove();
    })
  }

  async render() {
    $("#main-container").html(positionhtml)
    let $head = $("#main-container .head");
    await this.getlist();

    this.scroll = new BScroll('#position-wrapper', {
      scrollY: true,
      probeType: 3,
      pullDownRefresh: {
        threshold: 50
      }
    })

    this.scroll.on('pullingDown', async () => {
      console.log('pullingDown')
      await this.getlist()
      this.scroll.finishPullDown() // 回调结束必须有
    })

    this.scroll.on('scroll', function () {
      if (this.y > 10 && this.y < 50) {
        $head.show();
      } else if (this.y > 50) {
        $head.find('img').attr('src', './images/loading.gif');
      } else {
        $head.hide();
      }
    })
  }
}

export default new PositionController();