<?php
class mezza {
    public $mail = "Icemberth.Mike@gmail.com";
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
                $this->enviarContactenos($data);
            break;
        }
    }

    public function enviarCotizacionNormal($data){
        $mail = "Información : <br>";
        $mail .= "Nombre : ".$data["nombre"]." ".$data["apellidos"];
        $mail .= "<br> Identificación : ".$data["identificacion"];
        $mail .= "<br> Teléfono : ".$data["telefono"];
        $mail .= "<br> Correo : ".$data["correo"];
        //Titulo
        $titulo = "Cotización ".$data["servicio"]." Tipo Persona";
        //cabecera
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        //dirección del remitente
        $headers .= "From: Mezza web page <soporte@mezza.com.co>\r\n";
        //Enviamos el mensaje a tu_dirección_email
        $bool = mail($this->mail,$titulo,$mail,$headers);
        if($bool){
            //echo "Mensaje enviado";
            echo json_encode(array("Status" => "true"));
        }else{
            //echo "Mensaje no enviado";
            echo json_encode(array("Status" => "false"));
        }
    }
    public function enviarCotizacionEmpresa($data){
        //var_dump($data);
        $mail = "Información : <br>";
        $mail .= "Nombre : ".$data["nombre"]." ".$data["apellidos"];
        $mail .= "<br> Razón Social : ".$data["social"];
        $mail .= "<br> NIT : ".$data["nit"];
        $mail .= "<br> Correo : ".$data["correo"];
        $mail .= "<br> Número de empleados : ".$data["empleados"];
        //Titulo
        $titulo = "Cotización ".$data["servicio"]." Tipo Empresa";
        //cabecera
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        //dirección del remitente
        $headers .= "From: Mezza web page <soporte@mezza.com.co>\r\n";
        //Enviamos el mensaje a tu_dirección_email
        $bool = mail($this->mail,$titulo,$mail,$headers);
        if($bool){
            //echo "Mensaje enviado";
            echo json_encode(array("Status" => "true"));
        }else{
            //echo "Mensaje no enviado";
            echo  json_encode(array("Status" => "false"));
        }
    }
    public function enviarCotizacionNormalBanner($data){

    }
    public function enviarCotizacionEmpresaBanner($data){

    }
    public function enviarContactenos($data){
        $mail = "Información : <br>";
        $mail .= "Nombre : ".$data["nombre"]." ".$data["apellidos"];
        $mail .= "<br> Empresa : ".$data["empresa"];
        $mail .= "<br> Ciudad : ".$data["ciudad"];
        $mail .= "<br> Correo : ".$data["correo"];
        $mail .= "<br> Teléfono : ".$data["telefono"];
        $mail .= "<br> Mensaje : ".$data["mensaje"];
        //Titulo
        $titulo = "Servicio ".$data["servicio"]." ";
        //cabecera
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        //dirección del remitente
        $headers .= "From: Mezza web page <soporte@mezza.com.co>\r\n";
        //Enviamos el mensaje a tu_dirección_email
        $bool = mail($this->mail,$titulo,$mail,$headers);
        if($bool){
            //echo "Mensaje enviado";
            echo json_encode(array("Status" => "true"));
        }else{
            //echo "Mensaje no enviado";
            echo json_encode(array("Status" => "false"));
        }
    }
}
$mezza = new mezza();
$mezza->getController($_POST);
?>
