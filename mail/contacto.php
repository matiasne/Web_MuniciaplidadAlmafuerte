<?php
/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");


$nombre = $_POST["name"];
$email = $_POST["email"];
$mensaje = $_POST["message"];
$profesion = $_POST["profesion"];
$telefono = $_POST["phone"];

$smtpHost = "c1551001.ferozo.com";  
$smtpUsuario = "no-reply@c1551001.ferozo.com";  
$smtpClave = "IBMuXzA1lh";  

$emailDestino = "saludyesteticainternacional@gmail.com";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; 
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); 

$mail->Subject = "BioTeCu Mensaje"; 
$mensajeHtml = nl2br($mensaje);
$mail->Body = "Telefono: ".$telefono."<br /><br />Mail: ".$email."<br /><br />Profesion: ".$profesion."<br/><br/> {$mensajeHtml}"; 
$mail->AltBody = "{$mensaje} \n\n Telefono:"; 
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    return true;
} else {
    return false;
}
