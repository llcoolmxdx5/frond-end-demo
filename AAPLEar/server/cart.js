let GoodsList = require('./product');

module.exports = class Cart {
    constructor(req, shoppingList) {
        this.req = req;
        this.shoppingList = shoppingList;
        this.req['id'] = Number(this.req['id']);
    }

    getRes() {
        return {
            head: {
                "status": "200",
                "data": null
            },
            body: this.shoppingList
        };
    }

    getShoppingList() {
        return this.shoppingList
    }

    addToShoppingList() {
        let data = {};
        let item;
        // 查找GoodsList中的对应id的商品
        for (let i = 0; i < GoodsList.length; i++) {
            if (GoodsList[i]['id'] === this.req['id']) {
                item = GoodsList[i];
                break
            }
        }
        // 若商品已在shoppingList中 则数量+1
        for (let i = 0; i < this.shoppingList.length; i++) {
            if (this.shoppingList[i]['id'] === this.req['id']) {
                this.shoppingList[i]['count'] += 1;
                return this.shoppingList;
            }
        }
        data['id'] = item['id'];
        data['price'] = item['productPrice'];
        data['title'] = item['title'];
        data['image'] = '/src/assets/img/img-' + item['productImages']['items'][0]['src'].slice(6);
        data['count'] = 1;
        data['selected'] = true;
        this.shoppingList.push(data);
        return this.shoppingList
    }

    alterGoodsCount() {
        this.req['num'] = Number(this.req['num']);
        for (let i = 0; i < this.shoppingList.length; i++) {
            if (this.shoppingList[i]['id'] === this.req['id']) {
                this.shoppingList[i]['count'] = this.req['num'];
                return this.shoppingList
            }
        }
    }

    deleteGoods() {
        let arr = [];
        for (let i = 0; i < this.shoppingList.length; i++) {
            if (this.shoppingList[i]['id'] !== this.req['id']) {
                arr.push(this.shoppingList[i]);
            }
        }
        this.shoppingList = arr;
        return this.shoppingList
    }

    selectGoods() {
        // this.req.data
        for (let i = 0; i < this.shoppingList.length; i++) {
            if (this.shoppingList[i]['id'] === this.req['id']) {
                if (this.req['select'] === 'true') this.shoppingList[i]['selected'] = true;
                if (this.req['select'] === 'false') this.shoppingList[i]['selected'] = false
            }
        }
        return this.shoppingList
    }

    selectGoodsAll() {
        for (let i = 0; i < this.shoppingList.length; i++) {
            if (this.req['select'] === 'true') this.shoppingList[i]['selected'] = true;
            if (this.req['select'] === 'false') this.shoppingList[i]['selected'] = false
        }
        return this.shoppingList
    }
};