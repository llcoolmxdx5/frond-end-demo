import '../assets/css/header.scss';
class Header {
    constructor(parent) {
        this.parent = parent;
        this.num = 1;
        this.createHeader();
        document.addEventListener('cartNum changed', e => { this.cartNumChangeHandler(e) });
    }
    createHeader() {
        let div = document.createElement('header');
        let header = document.createElement('div');
        header.className = 'header';
        this.createHeaderTitle(header);
        this.createMenu(header, 0);
        div.appendChild(header);
        this.parent.insertBefore(div, app);
    }
    createHeaderTitle(parent) {
        let headerTitle = document.createElement('a');
        headerTitle.href = '#/index?page=1';
        headerTitle.className = 'header-title';
        headerTitle.textContent = '耳机商城';
        parent.appendChild(headerTitle);
    }
    createMenu(parent) {
        let menu = document.createElement('div');
        menu.className = 'header-menu';
        let cart = document.createElement('a');
        cart.href = '#/cart';
        cart.className = 'header-menu-cart';
        cart.textContent = '购物车';
        if (this.num !== 0) {
            let goodsNum = document.createElement('span');
            goodsNum.textContent = this.num;
            cart.appendChild(goodsNum);
        }
        menu.appendChild(cart);
        parent.appendChild(menu);
    }
    cartNumChangeHandler(e) {
        
    }
}
export default Header