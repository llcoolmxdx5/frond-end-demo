import SearchHtml from '../../views/Search/Search.html';
import itemHtml from '../../views/position/positionlist-item.html'
import Fetch from '../model/Fetch.js';

class SearchController {
    constructor() {
        this.pageNo = 1
        this.total = 0
        this.dataList = []
    }
    getlist(pageSize = 15) {
        return new Promise(async (reslove, reject) => {
            $("#loading").show();
            // let rs = await Fetch.getSearchList({
            //     city: '全国',
            //     positionName: '前端',
            //     pageNo: this.pageNo,
            //     pageSize: pageSize
            // });
            let rs = await Fetch.getPositionList(this.pageNo, pageSize)
            this.total = Number(rs.content.data.page.totalCount)
            this.dataList = this.dataList.concat(rs.content.data.page.result)
            let html = template.render(itemHtml, { list: this.dataList })
            $("#list-search-container").html(html)
            $("#loading").hide();
            reslove();
        })
    }

    initEvent() {
        $('#search > div.linputer > div.rinput > span').on('click', async () => {
            $('#search > div.listcon').removeClass('none');
            await this.getlist()
        })
    }

    async render() {
        $("#search-slide").html(SearchHtml)
        this.initEvent()
    }
}
export default new SearchController()