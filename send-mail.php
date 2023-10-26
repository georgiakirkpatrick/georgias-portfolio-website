<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require "vendor/autoload.php";

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->safeLoad();

    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = smtp::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = $_ENV["HOST"];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV["USERNAME"];
        $mail->Password = $_ENV["PASSWORD"];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = $_ENV["PORT"];

        $formName = $_POST["formName"];
        $formEmail = $_POST["formEmail"];
        $formSubject = $_POST["formSubject"];
        $formMessage = $_POST["formMessage"];
        $formCopy = $_POST["formCopy"];

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

        $mail->setFrom($_ENV["USERNAME"], 'Georgia Kirkpatrick');
        $mail->addAddress($_ENV["USERNAME"], 'Georgia Kirkpatrick');
        $mail->Subject = $formSubject;
        $mail->Body = $formName." submitted a new message at georgiakirkpatrick.com.\n\n".$formMessage;
        
        if ($formCopy == true) {
            $mail->addCC($formEmail, $formName);
        }

        $mail->send();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
?>