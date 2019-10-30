module.exports = (function () {
    return function (obj, shoppingList) {
        for (var i = 0; i < obj.ids.length; i++) {
            for (var j = 0; j < shoppingList.length; j++) {
                if (shoppingList[j].id === obj.ids[i]) {
                    shoppingList.splice(j, 1);
                    break;
                }
            }
        }
        return shoppingList;
    }


})();