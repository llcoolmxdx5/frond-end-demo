module.exports=(function(){
    return function(obj,data,shoppingList){
        var goods=search(shoppingList,obj.id);
        if(!goods){
            var o=search(data,obj.id);
            if(!o)return;
            goods={
                id:o.id,
                selected:false,
                icon:o.src,
                name:o.name,
                info:o.info,
                price:o.price,
                num:1,
                total:o.price,
                deleted:false
            };
            shoppingList.push(goods);
            return shoppingList;
        }
        goods.num++;
        goods.total=goods.price*goods.num;
        return shoppingList;
    };

    function search(list,id){
      return  list.reduce(function(value,item){
            return item.id===id ? item : value;
        },null);
    }
})();