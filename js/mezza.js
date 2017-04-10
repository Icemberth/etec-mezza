var mezza = {};

/*mezza.redirect = {
    redire
}*/

mezza = {
    init : function(){
      $(".redirect").on("click",function(){
        console.log($(this).attr("redirect"));
        document.location = $(this).attr("redirect") + ".html";
      });
       // page();
       // console.log("algo");
       // page.redirect("/index");
        //page('', mezza.getIndex);
        //page('/', mezza.getIndex);
        //page('/index', mezza.getIndex);
       // page('/arl', mezza.getArl);
    },
    redirect : function($URL){
        page.redirect($URL);
    },
    getIndex : function(ctx, next){
        console.log("Hola");
        /*$.getJSON('../js/index.json', function(index){
            //console.log("netro");
            console.log(index);
            $(".change-resource-name").text(index[0].name);
            $(".change-resource-img").attr("src",index[0].icon);
            $(".change-resource-url").attr("newResource",index[0].action);
            mezza.setMenu(index);
        });  */
    },
    setMenu : function(menu){
        /*var totalServices = $(".service").length;
        var i = 0;
        for(i = 0; i < totalServices; ++i){
            var service = menu[i].action;
            service = service.replace(/\\/g, '');
            //$(".service[typeof='"+service+"']").find("img").attr("src",menu[])
            $($(".service")[i]).find("img").attr("src",menu[i].icon);
            $($(".service")[i]).attr("icon",menu[i].icon);
            $($(".service")[i]).attr("name",menu[i].name);
            $($(".service")[i]).attr("action",menu[i].action);
        }*/
    },
    switchService : function(service){
        console.log(service);
        $(".change-resource-img").attr("src",$(service).attr("icon"));
        $(".change-resource-name").text($(service).attr("name"));
        $(".change-resource-url").attr("href",$(service).attr("action"));
    },
    getArl : function(){

    }
}
