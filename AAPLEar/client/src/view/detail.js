import AJAX from '../utils/AJAX.js';
import Zoom from '../component/Zoom.js';
import '../assets/css/detail.scss';

export default class Detail {
    constructor(parent) {
        this.parent = parent;
        this.init();
    }

    init() {
        let prop = {};
        location.hash.split('?')[1].split('&').forEach(function (item, value) {
            let itemArr = item.split('=');
            prop[itemArr[0]] = itemArr[1]
        });
        AJAX('/detail', prop).then(res => {
            this.results = res.body;
            this.createZoom();
            this.createDetail();
            document.title = this.results.title;
        });
    }

    createZoom() {
        let iconList = this.results.productImages.items.map(item => {
            return 'img-' + item.src.slice(6,)
        });
        let zoom = new Zoom(iconList);
        zoom.appendTo(this.parent)
    }

    createDetail() {
        let detail = document.createElement('div');
        detail.id = 'detail';
        let left = document.createElement('div');
        left.className = 'left';
        let violator = document.createElement('div');
        violator.className = 'violator';
        violator.textContent = this.results.violatorTranslatedText;
        let title = document.createElement('div');
        title.className = 'title';
        title.textContent = this.results.title;
        let price = document.createElement('div');
        price.className = 'price';
        let price1 = String(this.results.productPrice);
        if (price1.length > 3) {
            price1 = price1.slice(0, -3) + ',' + price1.slice(-3)
        }
        price.innerHTML = `RMB <span>${price1}</span>`;
        let staging = document.createElement('div');
        staging.className = 'staging';
        staging.innerHTML = `24 个月免息分期, 每月仅约 RMB <span>${Math.floor(this.results.productPrice / 24)}</span>`;
        let color = document.createElement('div');
        color.className = 'color';
        let colorTitle = document.createElement('div');
        colorTitle.className = 'color-title';
        colorTitle.textContent = `颜色 - 午夜黑`;
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        dt.textContent = 'All colors';
        dl.appendChild(dt);
        for (let i = 0; i < 4; i++) {
            let dd = document.createElement('dd');
            let img = document.createElement('img');
            img.src = 'src/assets/img/sq_01.jpeg';
            dd.appendChild(img);
            dl.appendChild(dd)
        }
        color.appendChild(colorTitle);
        color.appendChild(dl);
        let add = document.createElement('div');
        add.className = 'add';
        let button = document.createElement('button');
        button.type = 'submit';
        button.textContent = '添加到购物袋';
        button.addEventListener('click', e => {
            this.submitHandler(e)
        });;
        add.appendChild(button);
        let date = document.createElement('div');
        date.className = 'date';
        let span1 = document.createElement('span');
        span1.textContent = '现在订购，预计送达日期';
        let br1 = document.createElement('br');
        let br2 = document.createElement('br');
        let span2 = document.createElement('span');
        span2.textContent = this.getDate();
        let span3 = document.createElement('span');
        span3.textContent = `送达地址:承德`;
        date.appendChild(span1);
        date.appendChild(br1);
        date.appendChild(span2);
        date.appendChild(br2);
        date.appendChild(span3);
        left.appendChild(violator);
        left.appendChild(title);
        left.appendChild(price);
        left.appendChild(staging);
        left.appendChild(color);
        left.appendChild(add);
        left.appendChild(date);
        detail.appendChild(left);
        this.parent.appendChild(detail);
    }

    submitHandler(e) {
        let prop = {type: 0x02, id: this.results.id};
        AJAX('/cart', prop, 'POST').then(res => {
            let evt = new Event('cartNum changed');
            evt.count = res.body.length;
            document.dispatchEvent(evt);
            location.hash = '#/cart'
        });
    }

    getDate() {
        let now = new Date();
        let weekArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        let nowWeek = weekArr[now.getDay()];
        return `${nowWeek} ${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate() + 1} - 免费`
    }

}

























