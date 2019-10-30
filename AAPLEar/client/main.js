import './src/assets/css/base.scss';
import Header from './src/component/header.js';
import Index from './src/view/index.js';
import Cart from './src/view/cart.js';
import Detail from './src/view/detail.js';

// location.href = 'http://localhost:8080/#/index?page=1';

let app = document.querySelector('#app');
new Header(document.body);

window.addEventListener('load', function (e) {
    hashChangeHandler(e)
});
window.addEventListener('hashchange', function (e) {
    hashChangeHandler(e)
});

function hashChangeHandler(e) {
    let hash = location.hash.slice(2,);
    console.log(hash);
    if (hash === 'cart') {
        app.innerHTML = '';
        new Cart(app);
    } else if (hash.slice(0, 6) === 'detail') {
        app.innerHTML = '';
        new Detail(app);
    } else if (hash.slice(0, 5) === 'index') {
        app.innerHTML = '';
        new Index(app);
    }
}

