<?php
class mezza {
    public function getController($data){
        switch($data["adquirido"]){
            case 'servicePeople':
                $this->enviarCotizacionNormal($data);
            break;
            case  'serviceEnterprise':
                $this->enviarCotizacionEmpresa($data);
            break;
            case 'servicesPeopleBanner':
                $this->enviarCotizacionNormalBanner($data);
            break;
            case 'servicesEnterpriseBanner':
                $this->enviarCotizacionEmpresaBanner($data);
            break;
            case 'contact':

            break;
        }
    }

    public function enviarCotizacionNormal($data){
        var_dump($data);
    }
    public function enviarCotizacionEmpresa($data){
        var_dump("focus here");
    }
    public function enviarCotizacionNormalBanner($data){

    }
    public function enviarCotizacionEmpresaBanner($data){

    }
    public function enviarContactenos($data){

    }
}
$mezza = new mezza();
$mezza->getController($_POST);

//var_dump($_POST);
/*
<?php
$mail = "Prueba de mensaje";
//Titulo
$titulo = "PRUEBA DE TITULO";
//cabecera
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
//dirección del remitente
$headers .= "From: Geeky Theory < tu_dirección_email >\r\n";
//Enviamos el mensaje a tu_dirección_email
$bool = mail("tu_dirección_email",$titulo,$mail,$headers);
if($bool){
    echo "Mensaje enviado";
}else{
    echo "Mensaje no enviado";
}
?>*/
?>
