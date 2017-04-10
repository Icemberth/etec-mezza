var mezza = {};
mezza = {
    jsonCapture  : {},
    init : function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
      $(".redirect").on("click", function(){
        console.log($(this).attr("redirect"));
        document.location = $(this).attr("redirect") + ".html";
      });
    },
    switchService : function(service){
        console.log(service);
        $(".change-resource-img").attr("src",$(service).attr("icon"));
        $(".change-resource-name").text($(service).attr("name"));
        $(".change-resource-url").attr("href",$(service).attr("action"));
    },
    send : function(){
        console.log("entro");
        $.ajax({
            url: "mezza.php",
            method: "post",
            data: mezza.jsonCapture,
            beforeSend: function() {
                console.log("antes de enviar...");
                $('.container-of-request').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(".shadow-of-request").addClass("show");
                });
                $(".container-of-request").animateCss("bounceIn");
            },
            success: function(data) {
                //cotizacion-enviada.png
                console.log("recibido", data);
            },
            error: function (xhr, ajaxOptions, thrownError) {

            }
        });
    },
    getDataFromForm : function($form){
        var x = 0;
        var totalData = $($form).children().length;
        mezza.jsonCapture = {};//seteo el Json siempre uqe se haga una petición
        for(x = 0; x < totalData; ++x){
            //$($form).children()[x].value;
            //$($form).children()[x].attributes.name.value
            mezza.jsonCapture[$($form).children()[x].attributes.name.value] = $($form).children()[x].value;
        }
        console.log(mezza.jsonCapture);
        //$(".form-people").children()[0].value
    },
    sendService : function($formPeople, $formEnterprise){
       /* $('.container-of-request').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(".shadow-of-request").addClass("show");
        });
        $(".container-of-request").animateCss("bounceIn");*/
        if(!$($formPeople).hasClass("hide")){//Si no tiene la clase hide, envío este form con sus datos.
           mezza.getDataFromForm($formPeople);
        }else{//envío el form de Empresa
           mezza.getDataFromForm($formEnterprise);
        }
        //console.log("asdasd");
        mezza.send();
        /*$(".shadow-of-request").addClass("show");
        $(".container-of-request").animateCss("bounceIn"); */

        //mezza.request();
    }
}
