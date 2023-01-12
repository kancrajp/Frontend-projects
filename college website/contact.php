<?php
$name = $_POST['name'];
$sender_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'contact@gmail.com';

$email_subject = 'New form query';

$email_body = "Username: $name.\n".
              "Email: $sender_email.\n".
              "Subject: $subject.\n".
              "Message: $message.\n";

$to = 'abc@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply to: $sender_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: contact.html");

?>