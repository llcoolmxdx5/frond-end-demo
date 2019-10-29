const products = require('./product');
class GoodsList {
    constructor(f, s, page) {
        this.f = f;
        this.s = s;
        this.page = page;
        this.product = products;
        this.init()
    }
    init() {
        if (this.s) {
            switch (this.s) {
                case 'newest':
                    this.sNewest();
                    break;
                case 'priceLH':
                    this.sPriceLH();
                    break;
                case 'priceHL':
                    this.sPriceHL();
                    break
            }
        }
        if (this.f) {
            let arr = this.f.split('-');
            let arr1 = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === 'headphone') {
                    arr1 = arr1.concat(this.selectType('headphone'))
                } else if (arr[i] === 'speaker') {
                    arr1 = arr1.concat(this.selectType('speaker'))
                } else if (arr[i] === 'headphonecase') {
                    arr1 = arr1.concat(this.selectType('headphonecase'))
                } else if (arr[i] === 'audioadapter') {
                    arr1 = arr1.concat(this.selectType('audioadapter'))
                }
            }
            this.product = arr1
        }
        this.product = this.product.slice((this.page - 1) * 30, this.page * 30)
        this.data = {
            "head": {
                "status": "200",
                "data": {}
            },
            "body": {
                "results": {
                    "hasResults": true,
                    "items": this.product,
                    "size": this.product.length,
                    "page": Math.ceil(products.length / 30)
                }
            }
        }
    }
    getData(){
        return this.data
    }
    sNewest() {
        function compare(prop) {
            return function (a, b) {
                let value1 = a[prop];
                let value2 = b[prop];
                return value2 - value1
            }
        }
        this.product.sort(compare('time'))
    }
    sPriceLH() {
        function compare(prop) {
            return function (a, b) {
                let value1 = a[prop];
                let value2 = b[prop];
                return value1 - value2
            }
        }
        this.product.sort(compare('productPrice'))
    }
    sPriceHL() {
        function compare(prop) {
            return function (a, b) {
                let value1 = a[prop];
                let value2 = b[prop];
                return value2 - value1
            }
        }
        this.product.sort(compare('productPrice'))
    }
    selectType(type1) {
        let arr = [];
        this.product.forEach(function (item, index) {
            if (item.type === type1) {
                arr.push(item)
            }
        });
        return arr
    }
}
module.exports = GoodsList;