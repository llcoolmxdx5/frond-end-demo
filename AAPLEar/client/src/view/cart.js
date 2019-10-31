import AJAX from '../utils/AJAX.js';
import '../assets/css/cart.scss';
import Pagination from "../component/Pagination";

export default class Cart {
    constructor(parent) {
        document.title = '购物车';
        this.promotion = 0; // 优惠金额
        this.ajax({type:0x01});
        this.shoppingList = [
            {
                id: 10001, title: "AirPods ", price: 1558, image: "src/assets/img/img-01-01.jpeg",
                count: 1, selected: true
            },
            {
                id: 10002, title: "AirPods (配无线充电盒)", price: 1758, image: "src/assets/img/img-02-01.jpeg",
                count: 2, selected: false
            },
        ];
        this.assist = new Assist(this.shoppingList);
        this.createCart();
        parent.appendChild(this.cart)
    }
    ajax(prop){
        AJAX('/cart', prop, 'POST').then(res => {
            console.log(res)
        });
    }

    createCart() {
        this.judgeCreate(this.cart);
        this.cart = document.createElement('div');
        this.cart.id = 'cart';
        this.cart.className = 'cart';
        this.createCartHeader();
        this.createCartContent();
        this.createCartPromotion();
        this.createCartFooter();
    }

    createCartHeader() {
        this.judgeCreate(this.header);
        this.header = document.createElement('div');
        this.header.className = 'cart-header';

        let title = document.createElement('div');
        title.className = 'cart-header-title';
        title.textContent = '购物清单';

        let main = document.createElement('div');
        main.className = 'cart-header-main';

        let select = document.createElement('div');
        select.className = 'cart-select';
        let ck = document.createElement('input');
        ck.type = 'checkbox';
        ck.checked = true;
        let text = document.createTextNode('全选');
        select.appendChild(ck);
        select.appendChild(text);

        let info = document.createElement('div');
        info.className = 'cart-info';
        info.textContent = '商品信息';

        let price = document.createElement('div');
        price.className = 'cart-price';
        price.textContent = '单价';

        let count = document.createElement('div');
        count.className = 'cart-count';
        count.textContent = '数量';

        let cost = document.createElement('div');
        cost.className = 'cart-cost';
        cost.textContent = '小记';

        let delete1 = document.createElement('div');
        delete1.className = 'cart-delete';
        delete1.textContent = '删除';

        main.appendChild(select);
        main.appendChild(info);
        main.appendChild(price);
        main.appendChild(count);
        main.appendChild(cost);
        main.appendChild(delete1);
        this.header.appendChild(title);
        this.header.appendChild(main);
        this.cart.appendChild(this.header);
    }

    createCartContent() {
        this.judgeCreate(this.content);
        this.content = document.createElement('div');
        this.content.className = 'cart-content';

        if (this.shoppingList.length === 0) {
            let empty = document.createElement('div');
            empty.className = 'cart-empty';
            empty.textContent = '购物车为空';
            this.cart.appendChild(empty);
            return
        }
        this.shoppingList.forEach(item => {
            let main = document.createElement('div');
            main.className = 'cart-content-main';

            let select = document.createElement('div');
            select.className = 'cart-select';
            let ck = document.createElement('input');
            ck.type = 'checkbox';
            ck.checked = true;
            ck.style.marginRight = '28px';
            select.appendChild(ck);

            let info = document.createElement('div');
            info.className = 'cart-info';
            let infoImg = document.createElement('img');
            infoImg.src = item.image;
            let infoSpan = document.createElement('span');
            infoSpan.textContent = item.title;
            info.appendChild(infoImg);
            info.appendChild(infoSpan);

            let price = document.createElement('div');
            price.className = 'cart-price';
            price.textContent = item.price;

            let count = document.createElement('div');
            count.className = 'cart-count';
            let countMinus = document.createElement('span');
            countMinus.className = 'cart-control-minus';
            countMinus.textContent = '-';
            let countText = document.createTextNode(item.count);
            let countAdd = document.createElement('span');
            countAdd.className = 'cart-control-add';
            countAdd.textContent = '+';
            count.appendChild(countMinus);
            count.appendChild(countText);
            count.appendChild(countAdd);

            let cost = document.createElement('div');
            cost.className = 'cart-cost';
            cost.textContent = item.price * item.count;

            let delete1 = document.createElement('div');
            delete1.className = 'cart-delete';
            let deleteControl = document.createElement('span');
            deleteControl.className = 'cart-control-delete';
            deleteControl.textContent = '删除';
            delete1.appendChild(deleteControl);

            main.appendChild(select);
            main.appendChild(info);
            main.appendChild(price);
            main.appendChild(count);
            main.appendChild(cost);
            main.appendChild(delete1);
            this.content.appendChild(main);
            this.cart.appendChild(this.content);
        });
    }

    createCartPromotion() {
        let promotion = document.createElement('div');
        promotion.className = 'promotion';

        let span1 = document.createElement('span');
        span1.textContent = '使用优惠码：';

        let input = document.createElement('input');
        input.type = 'text';

        let span2 = document.createElement('span');
        span2.className = 'cart-control-promotion';
        span2.textContent = '验证';
        span2.addEventListener('click', e => {
            this.promotionHandler(e)
        });

        promotion.appendChild(span1);
        promotion.appendChild(input);
        promotion.appendChild(span2);

        this.cart.appendChild(promotion);
    }

    createCartFooter() {
        this.judgeCreate(this.footer);
        this.footer = document.createElement('div');
        this.footer.className = 'cart-footer';

        let desc1 = document.createElement('div');
        desc1.className = 'cart-footer-desc';
        desc1.innerHTML = `共计 <span>${this.assist.getTotalItem()}</span> 件商品`;

        let desc2 = document.createElement('div');
        desc2.className = 'cart-footer-desc';
        let promotionHTML = this.promotion > 0 ? `（优惠<span>¥ ${this.promotion}</span>）` : '';
        desc2.innerHTML = `应付总额 <span>¥ ${this.assist.getTotalCost() - this.promotion}</span>
        <br>${promotionHTML}`;

        let desc3 = document.createElement('div');
        desc3.className = 'cart-footer-desc';
        let order = document.createElement('div');
        order.className = 'cart-control-order';
        order.textContent = '现在结算';
        desc3.appendChild(order);

        this.footer.appendChild(desc1);
        this.footer.appendChild(desc2);
        this.footer.appendChild(desc3);

        this.cart.appendChild(this.footer);
    }

    promotionHandler(e) {
        let input = e.target.previousElementSibling;
        if (input.value === '') {
            this.promotion = 0;
            window.alert('请输入优惠码');
        } else if (input.value !== 'js') {
            this.promotion = 0;
            window.alert('优惠码验证失败');
        } else {
            window.alert('优惠码验证成功');
            this.promotion = 500
        }
        this.createCartFooter()
    }
    judgeCreate(elem) {
        if (elem) {
            elem.remove();
            elem = null;
        }
    }

}

class Assist {
    constructor(shoppingList) {
        this.shoppingList = shoppingList;
    }

    getTotalItem() {
        let totalItem = 0;
        this.shoppingList.forEach(item => {
            if (item.count !== 0) totalItem += 1
        });
        return totalItem
    }

    getTotalCost() {
        let totalCost = 0;
        this.shoppingList.forEach(item => {
            totalCost += item.price * item.count;
        });
        return totalCost
    }
}




















