import Carousel from '../component/Carousel.js';
import AJAX from '../utils/AJAX.js';
import '../assets/css/index.scss';
export default class Index{
    constructor(){
        document.title = '耳机商城';
        this.sortBool = true;
        this.app = document.querySelector('#app');
        this.createCarousel();
        this.createItemTitle();
        let prop = {};
        location.hash.split('?')[1].split('&').forEach(function (item, value) {
            let itemArr = item.split('=');
            prop[itemArr[0]] = itemArr[1]
        });

        // AJAX('/goodsList',prop).then(res => {
        //     this.page = res.body.results.page;
        //     this.item = res.body.results.items;
        //     console.log(this.page, this.item)
        // });

    }
    createCarousel(){
        let imgSrc=["left.png","right.png","lb01.png","lb02.png","lb03.png"];
        new Carousel(imgSrc, this.app);
    }
    createItemTitle(){
        let divSelect = document.createElement('div');
        divSelect.className = 'select';
        let divContent = document.createElement('div');
        divContent.className = 'content clearfix';
        let divLeft = document.createElement('div');
        divLeft.className = 'select-left';
        divLeft.textContent = '筛选';
        let divRight = document.createElement('div');
        divRight.className = 'select-right';
        divRight.textContent = '排序方式:';
        let span1 = document.createElement('span');
        span1.textContent = '精选';
        span1.addEventListener('click', e => { this.sortClickHandler(e) });
        let span2 = document.createElement('span');
        span2.className = 'bottom';
        let divSort = document.createElement('div');
        divSort.className = 'sort';
        let ul = document.createElement('ul');
        let typeArr = ['精选', '最新', '价格:由低到高', '价格:由高到低'];
        let linkArr = ["/#/index?page=1&s=featured", "/#/index?page=1&s=newest",
                       "/#/index?page=1&s=priceLH", "/#/index?page=1&s=priceHL"];
        for (let i=0;i<4;i++){
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = typeArr[i];
            a.href = linkArr[i];
            li.appendChild(a);
            ul.appendChild(li);
        }
        divSort.appendChild(ul);
        divRight.appendChild(span1);
        divRight.appendChild(span2);
        divRight.appendChild(divSort);
        divContent.appendChild(divLeft);
        divContent.appendChild(divRight);
        divSelect.appendChild(divContent);
        this.app.appendChild(divSelect);
    }
    sortClickHandler(e) {
        let divSort = e.target.nextElementSibling.nextElementSibling;
        divSort.style.display = 'block';
        e.target.nextElementSibling.className = 'top';
        e.stopPropagation();
        let arr = Array.from(divSort.childNodes[0].childNodes);
        arr.forEach((item) => {
            let a = item.firstChild;
            console.log(a.href);
            console.log(a.textContent);
            if (a.textContent === e.target.textContent) {
                a.style.color = '#888';
                a.style.cursor = 'default';
                a.href = 'javascript:void(0)';
            }
        });
        document.onclick = e1 => {
            divSort.style.display = 'none';
            e.target.nextElementSibling.className = 'bottom';
        }
    }
}

