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
        $.getJSON('js/index.json', function(user){
            console.log("netro");
            console.log(user);
        })
    }
}
