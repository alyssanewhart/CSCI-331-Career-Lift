<?php 
//NEED TO ADD SANITIZATION FILTERS IN !!!!!!!!!!!

    if (isset($_POST['submit'])) {
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $university = $_POST['university'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        $formcontent="From: $name \n Message: $message";
        $myEmail = "hwomack97@gmail.com";
        $subject = "Contact Form";
        $emailheader = "From: $email \r\n";

        mail($myEmail, $subject, $formcontent, $emailheader);
        echo 'this is index.php'; exit;
    };

?>