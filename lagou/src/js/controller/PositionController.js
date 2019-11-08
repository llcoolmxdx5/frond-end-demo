import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'

import positionhtml from '../../views/position/positionlist.html'
import itemHtml from '../../views/position/positionlist-item.html'
import fetch from '../model/Fetch'

BScroll.use(Pullup) // 底部下拉
BScroll.use(PullDown) //顶部下拉

class PositionController {
  constructor() {
    this.pageNo = 1;
    this.dataList = [];
    this.total = 0;
    this.initEvent()
  }

  initEvent() {
    $('#main-container').on('click', '.item', function () { // 事件委托
      let id = $(this).attr('data-id');
      location.href = `/detail.html?${id}`
    })
  }

  getlist(pageSize = 15) {
    return new Promise(async (reslove, reject) => {
      $("#loading").show();
      let rs = await fetch.getPositionList(this.pageNo, pageSize);
      this.total = rs.content.data.page.totalCount
      this.dataList = this.dataList.concat(rs.content.data.page.result)
      let html = template.render(itemHtml, { list: this.dataList })
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
      pullUpLoad: true,
      click: true,
      pullDownRefresh: {
        threshold: 50
      }
    })

    // 上拉刷新
    this.scroll.on('pullingDown', async () => {
      console.log('pullingDown')
      this.pageNo = 1
      this.dataList = []
      await this.getlist()
      this.scroll.finishPullDown() // 回调结束必须有
    })

    // 下拉加载更多
    this.scroll.on('pullingUp', async () => {
      this.pageNo++;
      await this.getlist()
      this.scroll.finishPullUp();
      this.scroll.refresh();
      if (this.dataList.length === this.total) {
        $('#main-container .foot').hide() // 加载完了
      }
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