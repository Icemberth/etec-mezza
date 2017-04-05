var mezza = {};

/*mezza.redirect = {
    redire
}*/

mezza = {
    init : function(){
        console.log("algo");
        page.redirect("/");
        //page('', mezza.getIndex);
        page('/', mezza.getIndex);
    },
    redirect : function($URL){
        page.redirect($URL);
    },
    getIndex : function(ctx, next){
        console.log("Hola");
        $.getJSON('js/index.json', function(index){
            //console.log("netro");
            console.log(index);
            $(".change-resource-name").text(index[0].name);
            $(".change-resource-img").attr("src",index[0].icon);
            $(".change-resource-url").attr("newResource",index[0].action);
        })
    }
}
