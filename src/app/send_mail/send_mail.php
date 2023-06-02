<?php

########### CONFIG ###############

$recipient = 'zediucorneliu@gmail.com';
$redirect = '';

########### CONFIG END ###########


########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################


// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow the POST method
header("Access-Control-Allow-Methods: POST");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type");

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        // Preflight request, respond with 200 OK and exit
        exit;
    case ("POST"):
        $subject = "Contact From " . $_POST['name'];
        $from = "Contact:  " . $_POST['email'];
        $message = nl2br($_POST['message']);
        $headers = "From:  contact@corneliu-zediu.com";

        mail($recipient, $subject, $message, $headers);
        header("Location: " . $redirect);
        exit;
    default:
        // Reject any non-POST or OPTIONS requests with a 405 Method Not Allowed status
        header("Allow: POST", true, 405);
        exit;
}
