module.exports=(function(){
    return function(obj,shoppingList){
       for(var i=0;i<obj.ids.length;i++){
        shoppingList.forEach(function(item){
            if(item.id===obj.ids[i]) item.selected=obj.selected;
        })
       }
       return shoppingList;
    }

   
})();