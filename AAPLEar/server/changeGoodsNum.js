module.exports = (function () {
    return function (obj, shoppingList) {
        var goods = search(shoppingList, obj.id);
        if (!goods) return null;
        goods.num = obj.num;
        goods.total = obj.num * goods.price;
        return shoppingList;
    };

    function search(list, id) {
        return list.reduce(function (value, item) {
            return item.id === id ? item : value;
        }, null);
    }
})();