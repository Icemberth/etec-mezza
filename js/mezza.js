var mezza = {};
mezza.redirect = {}

/*mezza.redirect = {
    redire
}*/

mezza = {
    init : function(){
        $(".redirect").on("click",function(){
            mezza.redirect($(this).attr("redirect"));
        });
    },
    redirect : function($URL){
        page.redirect($URL);
    }
}
