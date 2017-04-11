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
      $(".politica").on("click",function(){
         document.location = "politica.html";
      });
        $("body").on("click", ".close-cotizar", function(){
            $('.container-of-request').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(".shadow-of-request").removeClass("show");
            });
            $(".container-of-request").animateCss("bounceOut");
        });
    },
    switchService : function(service){
        console.log(service);
        $(".change-resource-img").attr("src",$(service).attr("icon"));
        $(".change-resource-name").text($(service).attr("name"));
        $(".change-resource-url").attr("href",$(service).attr("action"));
    },
    send : function($from){
        //console.log("entro");
        $messageOk = "";
        $messageCancel = "";
        $messageTitle = "";
        if($from == "" ||$from == null){//no existe mensaje, probablemente sea otro form que no sea contacto
            $messageTitle = "cotización";
            $messageOk = "Se ha procesado tu cotización correctamente!";
            $messageCancel = "Ocurrió un Error al procesar tu cotización por favor intenta de nuevo en unos momentos";
        }else{//viene del contacto
            $messageTitle = "Petición";
            $messageOk = "Se ha enviado correctamente tu petición, en breve nos comunicaremos contigo!";
            $messageCancel = "Ocurrió un Error al procesar tu petición por favor intenta de nuevo en unos momentos";
        }
        $.ajax({
            url: "mezza.php",
            method: "post",
            dataType: "json",
            data: mezza.jsonCapture,
            beforeSend: function() {
                console.log("antes de enviar...");
                /*$('.container-of-request').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(".shadow-of-request").addClass("show");
                });
                $(".container-of-request").animateCss("bounceIn");*/
                $(".container-of-request").html("");
                $(".container-of-request").append('\
                    <figure>\
                        <img src="img/loader.gif" alt="">\
                    </figure>\
                    <h5 class="mezza-color-aux">Procesando su '+$messageTitle+'</h5>\
                ');
                $(".shadow-of-request").addClass("show");
                $(".container-of-request").animateCss("bounceIn");
            },
            success: function(data) {
                //cotizacion-enviada.png
                console.log("recibido", data);
                if(data.Status == "true"){//todo salió bien
                    $(".container-of-request").html("");
                    $(".container-of-request").append('\
                        <figure><img src="img/cotizacion-enviada.png" style="width: 100px;margin-top: 10px;"/></figure>\
                        <p style="padding: 5px;">'+$messageOk+'</p>\
                        <a class="waves-effect waves-teal btn-flat change-resource-url close-cotizar" style="margin-bottom: 10px;" >CERRAR</a>\
                    ');

                }else{//algo salió mal
                    $(".container-of-request").html("");
                    $(".container-of-request").append('\
                        <p style="padding: 5px;">'+$messageCancel+'</p>\
                        <a class="waves-effect waves-teal btn-flat change-resource-url close-cotizar" style="margin-bottom: 10px;" >CERRAR</a>\
                    ');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $(".container-of-request").html("");
                $(".container-of-request").append('\
                    <p style="padding: 5px;">'+$messageCancel+'</p>\
                    <a class="waves-effect waves-teal btn-flat change-resource-url close-cotizar" style="margin-bottom: 10px;" >CERRAR</a>\
                ');
            }
        });
    },
    getDataFromForm : function($form){
        var x = 0;
        var totalData = $($form).children().length;
        mezza.jsonCapture = {};//seteo el Json siempre uqe se haga una petición
        for(x = 0; x < totalData; ++x){
            mezza.jsonCapture[$($form).children()[x].attributes.name.value] = $($form).children()[x].value;
        }
        console.log(mezza.jsonCapture);
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
        mezza.send("");
    },
    sendContact : function($formContact){
        mezza.getDataFromForm($formContact);
        mezza.send("Contact");
    }
}
